import React, { Component } from 'react';

export default class Progressbar extends Component {
  render() {
    return <><div className="headg"><div  style={{backgroundColor:"rgba(0, 0, 0, 0.05)",padding:"30px",boxShadow:"rgba(100, 100, 111, 0.1) 0px 7px 29px 0px"}}>
        <h1>Skills</h1>
        <label><h6>C/C++</h6></label>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
            </div>
            <label><h6>Python</h6></label>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}></div>
            </div>
        <label><h6>Html</h6></label>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}></div>
            </div>
            <label><h6>CSS</h6></label>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
            </div>

            <label><h6>JavaScript</h6></label>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}></div>
            </div>
        </div></div></>;
  }
}
