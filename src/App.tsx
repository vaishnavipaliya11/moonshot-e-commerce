
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { CartListing } from './pages/CartListing/CartListing';
import { ProductListing } from './pages/ProductListing/ProductListing';
import { SingleProduct } from './pages/SingleProduct/SingleProduct';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element= {<ProductListing/>}/>
        <Route path="/product/:id" element= {<SingleProduct/>}/>
        <Route path="/cart" element= {<CartListing/>}/>
      </Routes>
    </div>
  );
}

export default App;
