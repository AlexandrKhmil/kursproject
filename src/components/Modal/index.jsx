import React from 'react'
import { ModalWrapper, ModalInner, Close } from './style'

const Modal = props => {
  const { closeAction } = props
  const wrapRef = React.createRef()

  return (
    <ModalWrapper 
      ref={wrapRef} 
      onClick={ (e) => { if (wrapRef.current === e.target) closeAction() } }
    >
      <ModalInner>
        <Close onClick={ () => closeAction() }>
          <img src="../static/svg/close.svg" alt="close" />
        </Close> 
        { props.children }
      </ModalInner>
    </ModalWrapper>
  )
}

export default Modal