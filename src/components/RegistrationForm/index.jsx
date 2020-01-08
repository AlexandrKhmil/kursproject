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

const RegistrationForm = props => {
  const { handleSubmit, toggleRegistration } = props
  
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
      <Field 
        name="passwordRepeat"
        component="input"
        type="password"
        placeholder="Repaer password..."
      />
      <Buttons>
        <button>Enter</button>
        <button onClick={() => toggleRegistration()}>Close</button>
      </Buttons> 
    </Form>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(reduxForm({
  form: 'Registr' 
})(RegistrationForm))
