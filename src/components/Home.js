import React, { Component } from 'react';
// import
class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      email: "hong_ronald@hotmail.com",
      phone: "(832)276-7978",
      Location: "Houston, Tx",
      Github: "https://github.com/ronaldhong"
    }
  }
  render() {
    return(
      <div>
        <div>
          <h1>Home</h1>
        </div>
        <div className="info">
          <div>My Email: {this.state.email}</div>
          <div>Contact: {this.state.phone}</div>
          <div>{this.state.Location}</div>
          <div>Check out my <a href="https://github.com/ronaldhong">Github!</a></div>

        </div>
        <div className="images">
          <div className="image_one">
          </div>
        </div>
      </div>

    )
  }
}
export default Home;
