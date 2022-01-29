import React, { Component } from 'react';
import 'semantic-ui-css';
import { Link } from 'react-router-dom'
export default class Contact extends Component {
  render() {
    return <><div className="mar" style={{marginTop:"20px"}}>
    <div className="ui breadcrumb">
    <Link to="/" className="section">Home</Link>
    <i className="right angle icon divider"></i>
    <div className="active section">Contact</div>
  </div>
  </div>
  <div className="cent">
        <div className="cont2">
            <Link to="/" className="ui animated button" tabIndex="0">
                <div className="visible content">Back</div>
                <div className="hidden content">
                <i className="left arrow icon"></i>
                </div>
            </Link>
        <div className="cont">
            <div className="ui form">

            <div className="column"><br/>
                <button className="ui basic button">
                    <i className="icon user"></i>
                    Contact
                </button><br/><br/>
            <div className="field">
                
                <input className=" ui segment" type="text" placeholder="Name"/>
            </div>
        
            <div className="field">
                
                <input className="ui segment" type="text" placeholder="Email"/>
            </div>

        
            <div className="field">
                
                <textarea className=" ui segment" placeholder="Message"></textarea>
            </div>
        
            <button className="btn btn-primary">Send Message</button>  
            </div>
            </div>
        </div>.
        </div>
    </div></>;
  }
}
