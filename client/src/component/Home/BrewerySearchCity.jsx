import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography,sx} from '@mui/material';
import AddReview from '../AddReview/AddReview'; 

function BrewerySearchCity() {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [perPage, setPerPage] = useState(3);
  const [selectedBrewery, setSelectedBrewery] = useState(null);

  async function getResults() {
    try {
      const response = await fetch(
        `https://api.openbrewerydb.org/breweries?by_city=${searchQuery}&per_page=${perPage}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getResults();
  }, [searchQuery, perPage]);

  const handleReviewClick = (brewery) => {
    setSelectedBrewery(brewery); // Set the selected brewery for review
  };
  return (
    <div>
        <h2>Search by city</h2>
        <input
            type="text"
            placeholder="Search by city"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select value={perPage} onChange={(e) => setPerPage(e.target.value)}>
          <option value="3">3 results per page</option>
          <option value="10">10 results per page</option>
          <option value="20">20 results per page</option>
        </select>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          { results.map((brewery) => (
              <Card key={brewery.id} xs={{ margin: '10px', minWidth: '300px' ,backgroundColor:'lightBlue'}}
              onClick={() => handleReviewClick(brewery)}
              >
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
        {selectedBrewery && (
        // Display the review component when a brewery is selected
        <AddReview brewery={selectedBrewery} />
      )}
    </div>
  );
}

export default BrewerySearchCity;
