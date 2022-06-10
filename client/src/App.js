import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/Navbar';
import Home from './pages/Home';
import ShopsList from './pages/ShopsList';
import Aboutus from './pages/Aboutus';

function App() {
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
