import React from 'react'
import { ModalWrapper, ModalInner, Close } from './style'

const Modal = props => {
  return (
    <ModalWrapper>
      <ModalInner>
        <Close onClick={ () => { } }>
          <img src="../static/svg/close.svg" alt="close" />
        </Close> 
        {props.children}
      </ModalInner>
    </ModalWrapper>
  )
}

export default Modal