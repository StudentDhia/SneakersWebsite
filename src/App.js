import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Topbar from './Topbar/Topbar';
import MainSneakers from './MainSneakers/MainSneakers';
import MainInfo from './MainInfo/MainInfo';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <MainSneakers></MainSneakers>
      <MainInfo info_text="okokokokok" row_order="row" flip_img="1"></MainInfo>
      <MainInfo info_text="okokokokok" row_order="row-reverse" flip_img="-1"></MainInfo>
    </div>
  );
}

export default App;
