/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React from "react";



import { productsData } from "../data";

import CategoryPreview from './category-preview.component';
import CategoryPage from './category-page';

const StorepageStyles = css`
    padding: 20px 80px;
`

const StorePage = () => {

    return(

            <div css={StorepageStyles}>
                <h1>Categories</h1>
                {
                    productsData.map(({id, ...otherProps}) => (
                        <CategoryPreview key={id} {...otherProps} />
                    ))
                }
            </div>
        
    )
}

export default StorePage