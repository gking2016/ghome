import React, { Component } from 'react';
import TypeAnimation from 'react-type-animation';


export default class Header extends Component {
  render() {
    return <div>
        <div className="headg">
      <div className="headgs secondary">
      <div className="appg">
      <TypeAnimation 
      className="ani"
      cursor={true}
      sequence={["Hi, I'm Gaurav N V", 1000, 'Full Stack web developer',1000,"Hi, I'm Gaurav N V"]}
      wrapper="h2"
      repeat = "Infinity"
    />
    </div>
    <br/><br/>
    <div className="appg ">
    <button className='ui secondary basic button'>
      Explore
    </button>
    </div>
    </div>
    </div>
    </div>;
  }
}
