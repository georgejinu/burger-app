import React from 'react'
import _ from 'lodash'
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    let ingradients = _.map(props.ingradients, (n, item) => {
        return <li key={item}><span style={{ textTransform: 'capitalize' }} >{item}</span>:{n}</li>
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingradients:</p>
            <ul>
                {ingradients}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.cancelClick} btnType="Danger">CANCEL</Button>
            <Button clicked={props.continueClick} btnType="Success">CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;
