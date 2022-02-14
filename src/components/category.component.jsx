/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'


import React from "react";
import {useNavigate} from "react-router-dom";

const CategoryStyles = css`
    height: 240px;
    min-width: 22%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #74818A;
    border-radius: 3px;
    flex: 1 1 auto;
    padding: 25px;
    box-shadow: 3px 3px 5px #aaaaaa;
    margin:10px;
    filter: brightness(90%);
    background-position: center;
    background-size: cover;
    &:hover {
        transform: scale(1.05);
        transition: transform 6s cubic-bezier(0.1,0.2,0.1,0.1);
        cursor: pointer;
    }
`


const CategoryNameStyles = css`
    border: 1px solid #74818A;
    width: 100px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: white;
    opacity: 0.7;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`

const CategoryNameLabelStyles = css`
    padding: 0 ;
`


const CategoryWidget = ({title, size, img, pageUrl}) => {
    const navigate = useNavigate();
    return(
    <div 
        onClick={() => navigate(pageUrl)}
        style={{backgroundImage: `url(${img})`}}
        css={CategoryStyles}
    >
        <div css={CategoryNameStyles}>
            <p css={CategoryNameLabelStyles}>{title.toUpperCase()}</p>
        </div>
    </div>
)}

export default CategoryWidget