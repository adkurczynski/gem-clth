/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React from 'react'
import { connect } from 'react-redux'
import ButtonComponent from './button.component'
import { addItem } from '../redux/cart.actions'

const ProductWraperStyles = css`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    padding:10px;
`

const ImageWrapperStyles = css`
    height: 400px;
    width:300px;
    flex-grow: 8;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content:center;
    align-items:center;
    button {
        display: none;
        position: absolute;
        bottom: 10px;
    }
    &:hover {
        transform: scale(1.05);
        transition: transform 6s cubic-bezier(0.1,0.2,0.1,0.1);
        cursor: pointer;
        filter: brightness(90%);
        button {
            display: flex;
        }
    }
`

const MetadataWrapperStyles = css`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    width: 100%;
`

const Product = ({item, addItem}) => {
    const {id, name, price, imageUrl} = item
    return(
        <div css={ProductWraperStyles}>
            <div 
                style={{backgroundImage: `url(${imageUrl})`}}
                css={ImageWrapperStyles}
            >
            <ButtonComponent onClick={() => addItem(item)}>ADD TO CART</ButtonComponent>
            </div>
            <div css={MetadataWrapperStyles}>
                <p>{name}</p>
                <p style={{fontWeight: 'bold'}}>{price}$</p>
            </div>
        </div>
)
}
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(Product)