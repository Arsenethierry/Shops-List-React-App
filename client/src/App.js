import React, { useState,useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import NavbarComponent from './components/Navbar';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import { getShops } from './redux/actions/shops';

    
function App() {
  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getShops());
  },[dispatch]);

  return (
    <div className="App">
      <NavbarComponent currentId={currentId} setCurrentId={setCurrentId} />
      <Routes>
        <Route path='/' exact element={<Home setCurrentId={setCurrentId} />} />
        <Route path='about' element={<Aboutus />} />
      </Routes>
    </div>
  );
}

export default App;
