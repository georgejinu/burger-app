import React, { Component } from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/Auxiliary'
import BackDrop from '../Backdrop/Backdrop'

class Modal extends Component {
    componentWillUpdate(){
        console.log('[Modal] will update')
    }    

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show
    }

    render() {
        return (
            <Aux>
                <BackDrop show={this.props.show} clicked={this.props.handleBackDrop} />
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'transilateY(0)' : 'transilateY(-100vh)',
                        opacity: this.props.show ? 1 : 0,
                        display: this.props.show ? 'inline' : 'none'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;