import { Grid,Button ,styled } from '@mui/material';
import { useNavigate,Route, Routes } from "react-router-dom"
import { useState } from "react"
//components
import Banner from '../banner/Banner.jsx'
import SearchCategory from './SearchCategory'

import SearchBrew from "../search/SearchBrew"
import SearchApi from "./BrewerySearchCity.jsx"
import BrewerySearch from './BrewerySearchCity.jsx';
import AllBreweriesSearch from '../Home/AllBreweriesSearch'

const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`;
const Home = () => {
    
    const [formState, setFormState] = useState({
        searchBar: "",
        searchMethod: "by_name",
        searchMethodName: "name"
    })
    
    const [showSearch, setShowSearch] = useState(false);

    function toggleSearch() {
      setShowSearch(!showSearch);
    }
    
    function handleRadioClick(event) {
        setFormState({ ...formState, [event.target.name]: event.target.value, searchMethodName: event.target.id })
    } 
    
    return (
        <Grid container>
            <Banner/>
            <Grid item lg={2} xs={12} sm={2}>
              <SearchCategory />
            </Grid>
            <Grid container item xs={12} sm={10} lg={10}>
               <StyledButton variant="contained" onClick={toggleSearch}>
                  {showSearch ? 'Show All Breweries' : 'Show Search'} 
               </StyledButton>
              {!showSearch && (
                <AllBreweriesSearch />
              )}
              {showSearch && (
                 <SearchBrew radioClick={handleRadioClick} form={formState} /> 
              )}
            </Grid>
        </Grid>
      );
}

export default Home;