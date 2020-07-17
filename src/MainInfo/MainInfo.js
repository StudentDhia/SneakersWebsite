import React from 'react';
import './style.css';
import Img from '../img/green smoke.png';
import InfoBG from '../img/nike.jpg';
import styled from '@emotion/styled';

const MainInfo = ({info_text, row_order,flip_img}) => {


    const MainInfo_div = styled.div`
          position: relative;
          margin-top: 200px;
          flex-direction: ${row_order};
          display: flex;
          align-items: center;
      `

    const MainInfo_img = styled.img`

          -webkit-transform: scaleX(${flip_img});
          transform: scaleX(${flip_img});
    `

    return (
      
    <MainInfo_div>

        <MainInfo_img src={Img}/>

        <div class="main_div_info">

          <img src={InfoBG} />
          <p class="sneakers_info_text">
            {info_text}
          </p>

        </div>
    </MainInfo_div>
  );
}

export default MainInfo;