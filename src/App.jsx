import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Wishlist from './Pages/Wishlist';
import Pagenotfound from './Pages/Pagenotfound';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
