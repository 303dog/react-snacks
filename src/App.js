import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css';
import ProductCard from './component/ProductCard';

function App() {
  return (
    <div className="App">
        <ProductCard />
    </div>
  );
}

export default App;
