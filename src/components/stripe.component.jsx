/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const actualPrice = price * 100
    const publishableKey = "pk_test_51GsS1VKAOesgNKqzoKkksfUdU5CzeAmSAMpufdXH48cD4Yy4BtV0zApdNCzcEgki9RtW8EHDJYJBFrNKvNtLFvJi00Ufwh6lTN"
    const onToken = token => {
        alert('Payment successful')
    }
    return (
        <StripeCheckout 
            label='PAY'
            name='GEM clothing'
            billingAddress
            shippingAddress
            description={`Total: $${price}`}
            amount={actualPrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton