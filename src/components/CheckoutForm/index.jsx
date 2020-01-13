import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ModalActions from '../../actions/modals'
import { Form } from './style'

const mapStateToProps = ({user}) => ({ 
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ModalActions, dispatch)
}) 

class CheckoutForm extends React.Component {
  render() {
    const { handleSubmit, empty } = this.props
    return (
      <Form onSubmit={!empty ? handleSubmit : () => {}}>
        <label>
          <h6>Your contact emailhhhh</h6>
          <Field 
            name="email"
            component="input"
            type="email"
            placeholder="Your email..." 
          />
        </label>
        <label>
          <h6>Contact Phone</h6>
          <Field 
            name="tel"
            component="input"
            type="tel"
            placeholder="Your phone..."
          /> 
        </label> 
        <label>
          <h6>Address</h6>
          <Field 
            name="address"
            component="input"
            type="text"
            placeholder="Your address..."
          /> 
        </label>
        <button type="submit" disabled={empty}>
          Place Order
        </button>
      </Form>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(reduxForm({
  form: 'checkout' 
})(CheckoutForm))  