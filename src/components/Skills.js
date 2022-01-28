import React, { Component } from 'react';
import c1 from '../images/hacerrank(css).png';
import c2 from '../images/hacerrank(java).png';
import { Link } from 'react-router-dom'

export default class Skills extends Component {
  constructor(){
    super()
      this.state = {
        width:"18rem"
      }
    
  }
  render() {
    return <>
        <div className="contflx">
            <div>
            <div class="ui card" >
      <div class="image" >
        <img src={c1} />
      </div>
      <div class="content">
        <Link to="/certificate/1" class="header">Hacker Rank Css</Link>
        <br/><br/>
        <div class="ui labeled right floated button" tabindex="0">
            <div class="ui button">
                <i class="heart icon"></i> Like
            </div>
            <a class="ui basic label">
                2,048
            </a>
            </div>
      </div>
        </div>
            </div>

            <div>
            <div class="ui card">
      <div class="image">
        <img src={c2}/>
      </div>
      <div class="content">
        <Link to="/certificate/2" class="header">Hacker Rank Java</Link>
        <br/><br/>
        <div class="ui labeled right floated button" tabindex="0">
            <div class="ui button">
                <i class="heart icon"></i> Like
            </div>
            <a class="ui basic label">
                2,048
            </a>
            </div>
      </div>
        </div>
            </div>

            
        
        
        </div>
    </>;
  }
}
