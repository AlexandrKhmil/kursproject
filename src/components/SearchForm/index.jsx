import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from './style'

let SearchForm = props => {
  const { handleSubmit } = props 
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="searchRequest"
        component="input"
        type="text"
        placeholder="Search Your Item........"
      />
      <Button>
        <img src="../static/svg/search.svg" alt="Search Button" />
      </Button>
    </Form>
  )
}

  

export default reduxForm({
  form: 'search' // a unique identifier for this form
})(SearchForm)