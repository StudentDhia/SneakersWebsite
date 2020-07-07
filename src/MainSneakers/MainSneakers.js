import React from 'react';
import './style.css';
import Sneakers from '../img/placeholderNike.jpg';
import PurpleSmoke from '../PurpleSmoke/PurpleSmoke';

const MainSneakers = () => {

    return (
    <div>
        <div class="main_sneakers_div">
            <PurpleSmoke></PurpleSmoke>
            <img src={Sneakers} class="main_sneakers_img"/>
        </div>
    </div>
  );
}

export default MainSneakers;