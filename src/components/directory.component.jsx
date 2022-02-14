/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'


import React from "react";
import { categoryData } from '../data';
import CategoryWidget from './category.component';

const DirectoryStyles = css`
    display: flex;
    flex-wrap: wrap;    
    width: 100%;
    justify-content: space-between;
`

const Directory = () => (
    <div css={DirectoryStyles}>
        {categoryData.categories.map(({id, ...otherProps}) => (
            <CategoryWidget key={id} {...otherProps}/>
        ))}
    </div>
)

export default Directory