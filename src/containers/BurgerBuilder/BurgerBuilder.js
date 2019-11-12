import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import _ from 'lodash'
import BurgerControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGRADIENT_PRICES = {
    meat: 1.3,
    cheese: 0.5,
    salad: 0.5,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingradients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        },
        totalPrice: 4,
        showSummary: false
    }

    addIngradientHandler = (type) => {
        let oldCount = this.state.ingradients[type]
        let updatedCount = oldCount + 1
        let upgradedingradients = {
            ...this.state.ingradients
        }
        upgradedingradients[type] = updatedCount
        let totalPrice = this.state.totalPrice + INGRADIENT_PRICES[type]

        this.setState({
            ingradients: upgradedingradients,
            totalPrice: totalPrice
        })
    }

    removeIngradientHandler = (type) => {
        let oldCount = this.state.ingradients[type]
        if (oldCount === 0) return
        let updatedCount = oldCount - 1
        let upgradedingradients = {
            ...this.state.ingradients
        }
        upgradedingradients[type] = updatedCount
        let totalPrice = this.state.totalPrice - INGRADIENT_PRICES[type]

        this.setState({
            ingradients: upgradedingradients,
            totalPrice: totalPrice
        })
    }

    orderNowHandler = () => {
        this.setState({
            showSummary: true
        })
    }

    handleCancelOrder = () => {
        this.setState({
            showSummary: false
        })
    }

    continueHandler = () => {
    }

    render() {
        let disableIngradients = {
            ...this.state.ingradients
        }
        Object.keys(disableIngradients).map(item => {
            disableIngradients[item] = disableIngradients[item] === 0
        })

        let disableOrderNow = _.every(disableIngradients, (u) => u === true)
        return (
            <Aux>
                <Modal show={this.state.showSummary}
                    handleBackDrop={this.handleCancelOrder}>
                    <OrderSummary ingradients={this.state.ingradients}
                        cancelClick={this.handleCancelOrder}
                        continueClick={this.continueHandler}
                        totalPrice={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingradients={this.state.ingradients} />
                <BurgerControls
                    addIngradient={this.addIngradientHandler}
                    removeIngradient={this.removeIngradientHandler}
                    orderNow={this.orderNowHandler}
                    totalPrice={this.state.totalPrice}
                    disabled={disableIngradients}
                    disableOrderNow={disableOrderNow} />
            </Aux>
        );
    }
}

export default BurgerBuilder;