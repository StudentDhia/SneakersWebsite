import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Topbar from './Topbar/Topbar';
import MainSneakers from './MainSneakers/MainSneakers';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <MainSneakers></MainSneakers>
    </div>
  );
}

export default App;
