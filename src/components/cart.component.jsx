/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as CartLogo} from '../icons_assets/shopping-cart.svg'
import { toggleCart } from '../redux/cart.actions'



const cartWrapperStyles = css`
    height: 30px;
    width: 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`
const CartLogoStyles = css`
    position: absolute;
`

const CartLabelStyles = css`
    font-size: 11px;
    position: absolute;
    top:14%;
    left: 50%;
`
const Cart = ({toggleCart, summaryQuantity}) => (
    <div css={cartWrapperStyles} onClick={toggleCart}>
        <CartLogo css={CartLogoStyles} />
        <div css={CartLabelStyles}>{summaryQuantity}</div>
    </div>
)

const calculateQuantity = cartItems => {
    let quantity = 0;
    cartItems.forEach(element => {
        quantity = quantity + element.quantity
    });
    return quantity;
}

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

const mapStateToProps = state => ({
    summaryQuantity: calculateQuantity(state.cart.cartItems)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart) 