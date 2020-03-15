import React, { Component } from 'react';
import  './logo.css';
import logo from '../../img/logo.jpg';

class Logo extends Component {
    render() {
        return (
          <div className='logo-wrap'>
              <img src={logo} alt="logo"/>
              <h2><b>LEARN</b></h2>
          </div>
        );
    }
}
export default Logo;