import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Buttons } from './style'

const LoginForm = props => {
  const { handleSubmit } = props
  
  return (
    <Form onSubmit={handleSubmit}>
      <Field 
        name="email"
        component="input"
        type="email"
        placeholder="Your email..."
      />
      <Field 
        name="password"
        component="input"
        type="password"
        placeholder="Your password..."
      />
      <Buttons>
        <button>Enter</button>
        <button>Close</button>
      </Buttons> 
    </Form>
  )
}

export default reduxForm({
  form: 'Auth' 
})(LoginForm) 