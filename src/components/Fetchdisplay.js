import React, { Component } from 'react';

class Fetchdisplay extends Component {
  render() {
    return (
      <div className="fetch_content">
        <img className="avatar_url" src={this.props.profile.avatar_url} />
        <h2>Recent Repos on Github</h2>
        <div>
            {this.props.repos.map(r => {
              let name=r.name.replace(/-/gi, " ")
              console.log(name);
              return(
                <div className='repos' key={r.id}>
                  <div >
                    <div>
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
