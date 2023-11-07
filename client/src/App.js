import './App.css';
import { useState } from 'react';

import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
//components
import Login from './component/account/login';
import DataProvider from './context/DataProvider';
import Home from './component/Home/Home';
import SearchBrew from './component/search/SearchBrew';
import Header from './component/header/Header';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ? 
    <>
      <Header />
      <Outlet />
    </> : <Navigate replace to='/account' />
};
function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
    <BrowserRouter>
      <Box style={{ marginTop: 64 }}>
        <Routes>
          <Route path='/account' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
          
          <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path='/' element={<Home />} />
          </Route>

          <Route path='/search' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path='/search' element={<SearchBrew />} />
          </Route>

          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
