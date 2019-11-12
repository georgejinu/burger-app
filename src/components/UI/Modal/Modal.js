import React from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/Auxiliary'
import BackDrop from '../Backdrop/Backdrop'

const modal = (props) => (
    <Aux>
        <BackDrop show={props.show} handleBackDrop={props.handleBackDrop} />
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'transilateY(0)' : 'transilateY(-100vh)',
                opacity: props.show ? 1 : 0,
                display: props.show ? 'inline' : 'none'
                
            }}>
            {props.children}
        </div>
    </Aux>
)

export default modal;