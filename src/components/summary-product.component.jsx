/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React from 'react'
import { connect } from 'react-redux'
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'
import { addItem, deleteItem } from '../redux/cart.actions'

const ProductStyles = css`
    display: flex;
    width:80%;
    justify-content: center;
    margin: 15px;
    border-radius:10px;
    background:#EFEFEF;
    padding: 10px;
    box-shadow: 5px 10px 20px gray ;
`
const imgStyles = css`
    object-fit: cover;
    width:20%;
    max-height:250px;
`
const metadataStyles = css`
    display:flex;
    align-items: center;
    justify-content:center;
    padding:10px;
    width:50%;
`
const quantityContainerStyles = css`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:10px;
`

const SummaryProduct = ({item, deleteItem, addItem}) => {
    const {imageUrl, price, quantity, name} = item
    return(
        <div css={ProductStyles}>
            <img css={imgStyles} src={imageUrl}></img>
            <div css={metadataStyles} >
                <p>{name}</p>
                <div css={quantityContainerStyles}>
                  <AiFillCaretLeft onClick={()=> deleteItem(item)}/>
                  <p>{quantity}</p>
                  <AiFillCaretRight onClick={()=> addItem(item)}/>
                </div>
                <p>{quantity * price}$</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    deleteItem: item => dispatch(deleteItem(item))
})

export default connect(null, mapDispatchToProps)(SummaryProduct)