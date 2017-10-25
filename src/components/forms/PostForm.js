import { Field, reduxForm } from 'redux-form'

let PostsNew = props => {
  render() {
    const { handleSubmit } = props
    console.log(this.props.title);
    return (
      <div>
        <form onSubmit = { handleSubmit }>
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
})(PostsNew)

export default PostsNew
