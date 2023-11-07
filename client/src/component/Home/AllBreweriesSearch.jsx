import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Select, MenuItem } from '@mui/material';

function AllBreweriesSearch() {
  const [results, setResults] = useState([]);
  const [perPage, setPerPage] = useState(3);

  async function getResults() {
    try {
      const response = await fetch(
        `https://api.openbrewerydb.org/breweries?per_page=${perPage}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getResults();
  }, [perPage]);

  return (
    <div>
      <h2>All Breweries</h2>
      <select value={perPage} onChange={(e) => setPerPage(e.target.value)}>
        <option value="3">3 results per page</option>
        <option value="10">10 results per page</option>
        <option value="20">20 results per page</option>
      </select>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {results.map((brewery) => (
          <Card key={brewery.id} style={{ margin: '10px', minWidth: '300px' }}>
             <CardContent>
                  <Typography variant="h5">{brewery.name}</Typography>
                  <Typography>Adress: {brewery.address_1}</Typography>
                  <Typography>Phone: {brewery.phone}</Typography>
                  <Typography>City: {brewery.city}</Typography>
                  <Typography>State: {brewery.state}</Typography>
                  <Typography>Country: {brewery.country}</Typography>
              </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AllBreweriesSearch;
