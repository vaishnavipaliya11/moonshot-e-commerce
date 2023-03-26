import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { ProductListing } from './pages/ProductListing/ProductListing';

function App() {
  return (
    <div className="App">
      <ProductListing/>
    </div>
  );
}

export default App;
