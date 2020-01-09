import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ModalActions from '../../actions/modals'
import Modal from '../Modal' 
import { MessageInner } from './style' 

const mapStateToProps = ({modals}) => ({
  isOpen: modals.message 
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ModalActions, dispatch)
}) 

const Message = props => {
  const { isOpen, toggleMessage } = props
  return (
    <>
      { isOpen 
        ? <Modal closeAction={toggleMessage}>
            <MessageInner>
              <h4>Поздравляем</h4>
                <p>Ваш заказ принят и обрабатывается</p>
              </MessageInner>
          </Modal>
        : null
      }
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message)