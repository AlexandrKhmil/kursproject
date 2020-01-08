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
  registrateUser(values.email, values.password) 
}

const Registration = props => {
  const { isOpen, toggleRegistration } = props
  return (
    <>
      { isOpen 
        ? <Modal closeAction={toggleRegistration}>
            <RegistrationInner>
              <h4>Регистрация</h4>
              <RegistrationForm onSubmit={values => { console.log(values); registration(values); } } />
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