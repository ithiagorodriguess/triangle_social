import React from 'react';

import './App.css'
import Header from './components/Header/Header';
import MenuLeft from './components/MenuLeft/MenuLeft';


export default function App(props) {
  return(
    <div className="App">
      <Header notification = '10'/>
      <div className="menuLeft">
        <MenuLeft/>
      </div>
    </div>
  )
}