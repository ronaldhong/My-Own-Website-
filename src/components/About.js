import React, { Component } from 'react';
class About extends Component {
  constructor(props){
    super(props)
    this.state= {
      name: "Ronald Shun Hong",
      About: "Currently a student in The Iron Yard learning full stack skills, with an emphasis in front-end web development.",
      Frondend: "ReactJS (Flux, Redux), Bootstrap, Responsive Design",
      Backend: "NodeJS (Express), PostgreSQL, Sequelize, NoSQL-Mongoose, RESTful APIs, Third Party APIs (Git,Soundcloud, NASA)"
    }
  }
  render() {

    let about = {
      "font-family": "Courier New",
      "text-align": "center"
    }
    return(
      <div style={about}>
        <div className="about">
          <h2 >{this.state.name}</h2>
          <p className="about_name">{this.state.About}</p>
        </div>
        <div>
          <article>
            <div>
              <div>Skills</div>
              <div>Front-End</div>
              <ul>
                <li>{this.state.Frondend}</li>
              </ul>
            </div>
            <div>
              <div>Back-End</div>
              <div>
                <ul>
                  <li>{this.state.Backend}</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>

    )
  }
}
export default About;
