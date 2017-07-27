import React, { Component } from 'react';
import {NavLink, Link, BrowserRouter, Route, Switch} from 'react-router-dom'
import '../styles/App.css';

class BaseLayout extends Component {


  render() {
    let nav = {
      "padding-top": 30,
      "font-size": "1.2em",
      "font-family": "cursive"
    }
    return(
      <div >
        <div className="background_img"></div>
        <nav style={nav}>
          <NavLink exact to ="/"> Home </NavLink>
          <NavLink exact to ="/Portfolio">My Portfolio</NavLink>
          <NavLink exact to ="/about"> About me </NavLink>
        </nav>
        <h1>Welcome to my Blog!</h1>
        {this.props.children}
        <footer>
          Designed by Ronald S Hong <br/>ReactJS
        </footer>
      </div>

    )
  }
}
export default BaseLayout;
