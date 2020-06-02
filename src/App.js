import React from 'react';
import Navbar from './components/Navbar/Navbar'
import ShopList from './components/ShopList'
import "./style.css";
function App() {
  return (
    <div className="container">
          <Navbar/>
          <ShopList/>
    </div>
  );
}

export default App;
