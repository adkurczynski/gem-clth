/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React from 'react'

import { Link } from 'react-router-dom'

import Product from './product.component'

const CategoryPreviewWrapperStyles = css`
    padding:20px 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
`

const CategoryPreviewStyles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

`

const CategoryRedirectStyles = css`
    border: 2px solid black;
    padding:10px;
    margin-top:0;
    &:hover {
        background: black;
        cursor: pointer;
        color: white;
    }
`

const CategoryPreview = ({title, items}) => {

    
    return(
    <div css={CategoryPreviewWrapperStyles}>
        <h2>{title.toUpperCase()}</h2>
        <Link to={`/products/${title.toLowerCase()}`}>
            <h3 css={CategoryRedirectStyles}>GO TO CATEGORY</h3>
        </Link>
        <div css={CategoryPreviewStyles}>
            {items
            .filter((item, idx) => idx < 3)
            .map(item => (
                <Product key={item.id} item={item}/>
            ))}
        </div>
    </div>
)
}
export default CategoryPreview