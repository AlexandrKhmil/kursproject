import React from 'react'
import Modal from '../Modal'
import LoginForm from '../LoginForm'
import { LoginInner } from './style'

const Login = props => {
  return (
    <Modal>
      <LoginInner>
        <h4>Авторизация</h4>
        <LoginForm onSubmit={() => {}} />
      </LoginInner>
    </Modal>
  )
}

export default Login