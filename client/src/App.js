import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import NavbarComponent from './components/Navbar';
import Home from './pages/Home';
import ShopsList from './pages/ShopsList';
import Aboutus from './pages/Aboutus';
import { getShops } from './redux/actions/shops';

    
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getShops());
  },[dispatch]);

  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shops' element={<ShopsList />} />
        <Route path='about' element={<Aboutus />} />
      </Routes>
    </div>
  );
}

export default App;
