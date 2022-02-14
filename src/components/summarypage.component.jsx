/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React from 'react'
import { connect } from 'react-redux'
import StripeCheckoutButton from './stripe.component'

import SummaryProduct from './summary-product.component'

const SummaryPageStyles = css`
    margin: 80px 0 20px 0px;
    display:flex;
    align-items:center;
    flex-direction: column;
`

const SummaryPage = ({cartItems, totalValue}) => {
    return (
        <div css={SummaryPageStyles}>
            {
                cartItems.length ? (

                cartItems.map(item => (
                    <SummaryProduct key={item.id} item={item} />
                )) 

                ) : 

                <h3>CART IS EMPTY</h3>

            }
        <h2>{`TOTAL: $${totalValue}`}</h2>
        <StripeCheckoutButton price={totalValue}/>
        <p>*** In order to make mock payment use 4242 4242 4242 4242 Visa Credit Card, any 3 digits CVC and any future date ***</p>
        </div>
    )
}

const calculateTotalValue = cartItems => {
    let total = 0
    cartItems.forEach(element => {
        total += element.quantity * element.price
    });

    return total
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
    totalValue: calculateTotalValue(state.cart.cartItems)
})

export default connect(mapStateToProps)(SummaryPage)