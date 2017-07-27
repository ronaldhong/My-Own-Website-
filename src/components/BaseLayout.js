import React, { Component } from 'react';
import {NavLink, Link, BrowserRouter, Route, Switch} from 'react-router-dom'
import '../styles/App.css';
const FontAwesome = require('react-fontawesome')

class BaseLayout extends Component {


  render() {
    let home_nav = {
      "font-size": "1.5em",
      "font-family": "cursive"
    }
    return(
      <div >
        <div className="background_img-parent">
          <div className="background_img"></div>
        </div>
        <nav >
          <div style={home_nav}>
            <FontAwesome id="fb-icon" className='super-crazy-colors' name='home' size='1x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
            <NavLink exact to ="/" className="nav_link" activeStyle={{ color: 'red' }}> Home </NavLink>
          </div>
          <div style={home_nav}>
            <FontAwesome id="fb-icon" className='super-crazy-colors' name='th-large' size='1x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
            <NavLink exact to ="/Portfolio" className="nav_link" activeStyle={{ color: 'red' }}>My Portfolio</NavLink>
          </div>
          <div style={home_nav}>
            <FontAwesome id="fb-icon" className='super-crazy-colors' name='qq' size='1x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
            <NavLink exact to ="/about" className="nav_link" activeStyle={{ color: 'red' }}> About me </NavLink>
          </div>
          <div style={home_nav}>
            <FontAwesome id="fb-icon" className='super-crazy-colors' name='qq' size='1x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
            <NavLink exact to ="/contact" className="nav_link" activeStyle={{ color: 'red' }}> Contact </NavLink>
          </div>
        </nav>
        <div className="header">
          <h1>Your Future software developer</h1>
        </div>
        {this.props.children}
        <footer>
          <p>&copy; 2017 ronaldhong.com</p>
        </footer>
      </div>

    )
  }
}
export default BaseLayout;
