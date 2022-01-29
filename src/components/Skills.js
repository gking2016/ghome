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
    <div className="cer"><div  >
        <h1 style={{textAlign:"center"}}>Certificate</h1>
        <div className="contflx">
        <div class="card" style={{width: "28rem",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <img src={c1} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 class="card-title">Hacker Rank Css</h5>
          <p class="card-text">Some quick example ..</p>
          <Link to="/certificate/1" className="btn btn-primary">See Details</Link>
        </div>
      </div>

      <div class="card" style={{width: "28rem",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <img src={c2} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 class="card-title">Hacker Rank Java</h5>
          <p class="card-text">Some quick example ..</p>
          <Link to="/certificate/1" className="btn btn-primary">See Details</Link>
        </div>
      </div>
      </div></div>

            
        
        
        </div>
    </>;
  }
}
