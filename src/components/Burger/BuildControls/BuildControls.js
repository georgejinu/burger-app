import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: "Meat", type: "meat" },
    { label: "Cheese", type: "cheese" },
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {
            controls.map((item) => (<BuildControl
                key={item.label}
                label={item.label}
                addIngradient={() => props.addIngradient(item.type)}
                removeIngradient={() => props.removeIngradient(item.type)}
                disabled={props.disabled[item.type]} />))
        }
        <button className={classes.OrderButton}
            onClick={props.orderNow}
            disabled={props.disableOrderNow}>ORDER NOW</button>
    </div>
)

export default buildControls;
