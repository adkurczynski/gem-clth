/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import ButtonComponent from './button.component'
import CartProduct from './cart-product.component'

const DropdownStyles = css`
    position: absolute;
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    top: 80px;
    border: 1px solid black;
    right: 7%;
    z-index: 2;
    background: white;
`

const ItemListStyles = css`
    height: 300px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    align-items:center;
`
const LinkStyles = css`
    display:flex;
    justify-content: center;
    align-items:center;
`

const CartDropdown = ({cartItems}) => (
    <div css={DropdownStyles}>
        <div css={ItemListStyles}>
        {
            cartItems.length ?

            (
                cartItems.map(item => (
                <CartProduct key={item.id} item={item} />
                ))
            )

            :

            (<div>CART IS EMPTY</div>)
        }
        </div>
        <Link css={LinkStyles}  to='/summary'>
            <ButtonComponent>SUMMARY</ButtonComponent>
        </Link>
    </div>
)

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown)