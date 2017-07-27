import React, { Component } from 'react';
import Fetchdisplay from './Fetchdisplay'
class Portfolio extends Component {
  constructor(props){
    super(props)
    this.state={
      profile: {},
      repos: []
    }
  }

  componentDidMount(){
    fetch("https://api.github.com/users/ronaldhong")
    .then(r=>r.json())
    .then(data => this.setState({profile: data}))

    fetch('https://api.github.com/users/ronaldhong/repos')
    .then(r => r.json())
    .then(data => this.setState({repos: data}))
  }
  render() {
    return(
      <div>
        <Fetchdisplay  profile={this.state.profile} repos={this.state.repos} />
      </div>
    )
  }
}
export default Portfolio;
