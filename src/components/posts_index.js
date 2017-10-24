import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPosts } from '../actions/index'

class Posts extends Component {
  // or we can use componentWillMount()
  // best time to call action creator
  componentDidMount() {
    console.log(this.props.fetchPosts());
    this.props.fetchPosts()
  }
  render() {
    return (
      <div>
        dodo lives here
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch)
}

export default connect(null, mapDispatchToProps)(Posts)
