import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  './header.css';

class Header extends Component {
    render() {
        return (
            <div className='header-wrap'>
                <div className='header'>
                <input className='input-search' type="text" placeholder="Search"/>
                   <Link className='add-course' to='/add-edit-form'><button>ADD</button></Link>
                </div>
            </div>
        );
    }
}
export default Header;