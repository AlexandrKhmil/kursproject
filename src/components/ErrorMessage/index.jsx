import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ModalActions from '../../actions/modals'
import Modal from '../Modal' 
import { ErrorInner } from './style'

const mapStateToProps = ({modals}) => ({
  isOpen: modals.error.status,
  text: modals.error.text
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ModalActions, dispatch)
}) 

const Error = props => {
  const { isOpen, toggleError } = props
  return (
    <>
      { isOpen 
        ? <Modal closeAction={ () => toggleError('')}>
            <ErrorInner>
              <h4>Ошибка</h4>
              <p>
                {props.text}
              </p>
            </ErrorInner>
          </Modal>
        : null
      }
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Error)