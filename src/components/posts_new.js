import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { createPost } from '../actions/index'

class PostsNew extends Component {
  handleSubmit = (evt) => {
    // evt.preventDefault()
    // console.log(values);
  }
  render() {
    const {handleSubmit} = this.props
    return (
      <div>
        <form onSubmit = { handleSubmit(this.props.createPost) } method = 'post'>
          <h3>Create a new Post</h3>
          <div className = 'form-group'>
            <label htmlFor = 'title'>Title: </label>
            <Field name = 'title' component = 'input' type = 'text' className = 'form-control'/>
          </div>
          <div className = 'form-group'>
            <label htmlFor = 'categories'>Categories: </label>
            <Field name = 'categories' component = 'input' type = 'text' className = 'form-control'/>
          </div>
          <div className = 'form-group'>
            <label htmlFor = 'content'>Content: </label>
            <Field name = 'content' component = 'textarea' className = 'form-control'/>
          </div>
          <button type = 'submit' className = 'btn btn-primary'>Submit</button>
        </form>
      </div>
    )
  }
}



PostsNew = reduxForm({
  // always a unique name
  form: 'newPost'
}, null, { createPost })(PostsNew)

export default PostsNew


// class NewPostForm extends Component {
//
//   render() {
//     return (
//       <PostNew onSubmit = { this.submit } />
//     )
//   }
// }
