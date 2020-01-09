import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ModalActions from '../../actions/modals'
import Modal from '../Modal'
import RegistrationForm from '../RegistrationForm'
import { registrateUser } from '../../firebase'
import { RegistrationInner } from './style' 

const mapStateToProps = ({modals}) => ({
  isOpen: modals.registration
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ModalActions, dispatch)
}) 

const registration = values => {
  if (values.password.length < 6) {
    alert("Слишком короткий пароль")
    return false
  }
  if (values.passwordRepeat !== values.password) {
    alert("Пароли не совпадают")
    return false
  } else {
    registrateUser(values.email, values.password) 
    return true
  }  
}

const Registration = props => {
  const { isOpen, toggleRegistration } = props
  return (
    <>
      { isOpen 
        ? <Modal closeAction={toggleRegistration}>
            <RegistrationInner>
              <h4>Регистрация</h4>
              <RegistrationForm 
                onSubmit={values => { if (registration(values)) { toggleRegistration() } else { return null } } }  
              />
            </RegistrationInner>
          </Modal>
        : null
      }
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration)