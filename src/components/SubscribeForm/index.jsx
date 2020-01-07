import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form } from './style'

const SubscribeForm = props => {
  const { handleSubmit } = props 
  return (
    <Form onSubmit={ handleSubmit }>
      <Field 
        name="subscribeRequest"
        component="input"
        type="email" 
				placeholder="Type your email..."  
			/> 
      <button type="submit">
        Let's go!
      </button> 
		</Form> 
  )
}

export default reduxForm({
  form: 'subscribe' 
})(SubscribeForm) 