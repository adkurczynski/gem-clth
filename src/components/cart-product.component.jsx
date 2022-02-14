/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React from "react";
import { connect } from 'react-redux';

const CartProductStyles = css`
    display: flex;
    margin-bottom: 15px;
`
const imgStyles = css`
    object-fit: cover;
    width:40%;
`

const metadataStyles = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
`

const CartProduct = ({item}) => {
    const {quantity, imageUrl, name, price} = item
    return(
        <div css={CartProductStyles}>
            <img src={imageUrl} css={imgStyles}></img>
            <div css={metadataStyles}>
                <p>{name}</p>
                <p>{quantity} x {price}$</p>
            </div>
        </div>
    )
}


export default CartProduct