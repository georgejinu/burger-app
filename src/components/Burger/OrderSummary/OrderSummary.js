import React, { Component } from 'react'
import _ from 'lodash'
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    componentWillUpdate(){
        console.log('[OrderSummary] will update')
    }   

    render() {
        let ingradients = _.map(this.props.ingradients, (n, item) => {
            return <li key={item}><span style={{ textTransform: 'capitalize' }} >{item}</span>:{n}</li>
        })

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingradients:</p>
                <ul>
                    {ingradients}
                </ul>
                <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.cancelClick} btnType="Danger">CANCEL</Button>
                <Button clicked={this.props.continueClick} btnType="Success">CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary;
