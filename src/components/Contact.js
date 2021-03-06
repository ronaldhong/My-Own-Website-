import React, { Component } from 'react';
const FontAwesome = require('react-fontawesome')


class Contact extends Component {
  constructor(props){
    super(props);
    this.state={
      email: "hong_ronald@hotmail.com",
      phone: "(832)276-7978",
      Location: "Houston, Tx"
    }
  }
  render() {
    return(
      <div className="about_me">
        <div className="FontAwesome">
          <a href="https://www.facebook.com/ronaldshunhong"><FontAwesome id="fb-icon" className='super-crazy-colors' name='facebook-square' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></a>
          <a href="https://www.instagram.com/ron_hong919"><FontAwesome id="instagram-icon" className='super-crazy-colors' name='instagram' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></a>
          <a href="https://github.com/ronaldhong"><FontAwesome id="github-icon" className='super-crazy-colors' name='github' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></a>
        </div>
        <div>
          <div className="contact">
            <div>{this.state.email}</div>
            <div>{this.state.phone}</div>
            <div>{this.state.Location}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Contact;
