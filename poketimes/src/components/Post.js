import React, { Component } from 'react'

class Post extends Component {
  
  state = {
    id: null
  }
  
  componentDidMount() {
    let id = this.props.match.params.postId;
    
    this.setState({
      id
    })
  }

  render() {
    return (
      <div className="container">
        <h4>route param</h4>
        <span>{this.state.id}</span>
      </div>
    )
  }
}

export default Post