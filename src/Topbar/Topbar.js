import React from 'react';
import './style.css';
import Logo from '../img/logo.png';

const Topbar = () => {

    return (
    <div>
      <nav>
          <ul>
                <li class="topbar-logo">
                    <img src={Logo}/>
                </li>
                <li class="topbar-items">
                    <a href="#">MEN</a>
                </li>
                <li class="topbar-items">
                    <a href="#">WOMEN</a>
                </li>
                <li class="topbar-items">
                    <a href="#">CHILDREN</a>
                </li>
                <li class="topbar-items">
                    <a href="#">SPORT</a>
                </li>
          </ul>
      </nav>
    </div>
  );
}

export default Topbar;