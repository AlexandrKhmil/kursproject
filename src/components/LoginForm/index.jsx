import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ModalActions from '../../actions/modals'
import { Form, Buttons } from './style'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ModalActions, dispatch)
}) 

const LoginForm = props => {
  const { handleSubmit, toggleAuth } = props
  
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
        <button onClick={() => toggleAuth()}>Close</button>
      </Buttons> 
    </Form>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(reduxForm({
  form: 'Auth' 
})(LoginForm))
