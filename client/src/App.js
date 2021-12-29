import React, { useState } from 'react';
import './App.css'

import Home from './pages/Home';
import NavBar from './components/NavBar';
import Nav from './components/Nav'


function App() {
  return (

    <div>
      <NavBar></NavBar>
      <main>
        <h1>Subscript-zen</h1>
        <Home></Home>
      </main>
    </div>
  );
}

export default App;