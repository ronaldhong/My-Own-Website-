import React, { Component } from 'react';

class Fetchdisplay extends Component {
  render() {
    return (
      <div className="fetch_content">
        <div className="fetch_title">
          <img className="avatar_url" src={this.props.profile.avatar_url} />
          <div>
            <h2 className="speciality">Front End Developer</h2>
          </div>
        </div>
        <h2 className="recent_repo">Recent Repos on Github</h2>
        <div>
            {this.props.repos.map(r => {
              let name=r.name.replace(/-/gi, " ")
              return(
                <div className='repos' key={r.id}>
                  <div >
                    <div className="name">
                      <h3><a href={r.svn_url}> {name}</a></h3>
                    </div>
                    <div>
                      <p className="list-group-item">Language: {r.language}</p>
                      <p className="list-group-item">Created: {r.created_at}</p>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    );
  }
}
export default Fetchdisplay;
