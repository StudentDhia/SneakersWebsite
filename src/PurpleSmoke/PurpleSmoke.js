import React from 'react';
import './style.css';
import Smoke from '../img/smoke.png';
import Sketch from 'react-p5';
import ShaderVert from './shader.vert';
import ShaderFrag from './shader.frag';
import GreenSmoke from '../img/green smoke.png'

const PurpleSmoke = () => {

    //////////////////////////////////////////////  SHADER CODE ////////////////////////////////////////////////////////////

    /*let theShader;
    
    const preload = (p5) => {

        theShader = p5.loadShader(ShaderVert,ShaderFrag);
    };

    const setup = (p5) => {


    };*/

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
    <div>
      <img src={GreenSmoke} class="greensmoke_img"/>
      <img src={GreenSmoke} class="greensmoke_img2"/>
    </div>
  );
}

export default PurpleSmoke;