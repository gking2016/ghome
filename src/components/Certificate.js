import React, { Component } from 'react';
import './Cert.css'
import c1 from '../images/hacerrank(css).png';
import c2 from '../images/hacerrank(java).png';
import c3 from '../images/0001.jpg'
export default class Certificate extends Component {
  render() {
    return <div className="flg">

    <ul class="slider">
        <li>
            <input type="radio" id="slide1" name="slide" checked/>
            <label for="slide1"></label>
            <img src={c1} alt="Panel 1"/>
        </li>
        <li>
            <input type="radio" id="slide2" name="slide"/>
            <label for="slide2"></label>
            <img src={c2} alt="Panel 2"/>
        </li>
        <li>
            <input type="radio" id="slide3" name="slide"/>
            <label for="slide3"></label>
            <img src={c3} alt="Panel 3"/>
        </li>
        
    </ul></div>;
  }
}
