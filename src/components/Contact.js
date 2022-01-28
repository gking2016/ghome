import React, { Component } from 'react';
import 'semantic-ui-css';
import { Link } from 'react-router-dom'
export default class Contact extends Component {
  render() {
    return <><div className="mar">
    <div class="ui breadcrumb">
    <Link to="/" class="section">Home</Link>
    <i class="right angle icon divider"></i>
    <div class="active section">Contact</div>
  </div>
  </div>
  <div className="cent">
        <div className="cont2">
            <Link to="/" class="ui animated button" tabIndex="0">
                <div class="visible content">Back</div>
                <div class="hidden content">
                <i class="left arrow icon"></i>
                </div>
            </Link>
        <div className="cont">
            <div className="ui form">

            <div class="column"><br/>
                <button class="ui basic button">
                    <i class="icon user"></i>
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
        
            <div class="ui animated fade button" tabindex="0">
                <div class="visible content">Send Message</div>
                <div class="hidden content">
                <i class="envelope icon"></i>
                </div>
            </div>  
            </div>
            </div>
        </div>
        </div>
    </div></>;
  }
}
