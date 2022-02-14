/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React from "react";
import { useParams } from 'react-router-dom';

import { productsData } from "../data";
import Product from './product.component'

const CategoryPageStyles = css`
    display: flex;
    padding: 80px;
    flex-wrap: wrap;

`



const CategoryPage = () => {
    const {category}= useParams()
    const array = productsData.filter(products => products.routeName === category)
    const items = array[0].items
    console.log(category)
    return(
            <div css={CategoryPageStyles}>
                {
                    items.map(item => (
                        <Product key={item.id} item={item}/>
                    ))
                }
            </div>

    )
}

export default CategoryPage