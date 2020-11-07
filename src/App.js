import React from 'react'
import './App.css';
import Dinner from './dinner.js';
function App() {
  return (
    <div className="App">

      <Dinner dishName="Chicken Karahi" sweetDish="Kheer"/>

      <hr/>
      <Dinner dishName="Biryani" sweetDish="Khorma"/>

      <hr/>

      <Dinner dishName="Nihari" sweetDish="Jalebi"/>
      
      
    </div>
  );
}

export default App;
