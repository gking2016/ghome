import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
  render() {
    return <div>
         <div className="ui secondary menu">
<h1 className="item">Gaurav N V</h1>
  <div className="right menu">
    <div className="item">
      <div className="ui icon input">
      <Link to="/" className="active item">
    Home
  </Link>
  <Link to="/" className="active item">
    About
  </Link>
  <Link className="active item" to="/contact">
  Contact
  </Link>
      </div>
    </div>
    
  </div>
</div>
    </div>;
  }
}
