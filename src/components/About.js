import React, { Component } from 'react';
class About extends Component {
  constructor(props){
    super(props)
    this.state= {
      name: "Ronald",
      age: "25",
      About: "Future Web Developer, currently a student in The Iron Yard learning full stack skills, with an emphasis in front end web development.",
      education: "The University of Texas at Austin"
    }
  }
  render() {
    return(
      <div>
        <div>
          <h3>About {this.state.name}</h3>
        </div>
        <div className="info">
          <article>
            <div>Age: {this.state.age}</div>
            <div>Education: {this.state.education}</div>
            <div>About: {this.state.About}</div>
          </article>
        </div>
      </div>

    )
  }
}
export default About;
