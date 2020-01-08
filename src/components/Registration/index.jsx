import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ModalActions from '../../actions/modals'
import Modal from '../Modal'
import RegistrationForm from '../RegistrationForm'
import { RegistrationInner } from './style'

const mapStateToProps = ({modals}) => ({
  isOpen: modals.registration 
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ModalActions, dispatch)
}) 

const Registration = props => {
  const { isOpen, toggleRegistration } = props
  return (
    <>
      { isOpen 
        ? <Modal closeAction={toggleRegistration}>
            <RegistrationInner>
              <h4>Регистрация</h4>
              <RegistrationForm onSubmit={() => {}} />
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