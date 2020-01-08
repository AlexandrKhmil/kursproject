import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ModalActions from '../../actions/modals'
import Modal from '../Modal'
import LoginForm from '../LoginForm' 
import { LoginInner } from './style'
import { authUser } from '../../firebase'

const mapStateToProps = ({modals}) => ({
  isOpen: modals.auth 
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ModalActions, dispatch)
}) 

const auth = values => {
  authUser(values.email, values.password) 
}

const Login = props => {
  const { isOpen, toggleAuth } = props
  return (
    <>
      { isOpen 
        ? <Modal closeAction={toggleAuth}>
            <LoginInner>
              <h4>Авторизация</h4>
              <LoginForm onSubmit={values => auth(values)} />
            </LoginInner>
          </Modal>
        : null
      }
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)