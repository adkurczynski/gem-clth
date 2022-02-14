/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React from 'react'

const ButtonStyles = css`
  background-color: white;
  border: none;
  color: black;
  border-radius: 1px;
  border: 1px solid #74818A;
  padding: 8px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
      background-color:#74818A;
  }
`

const ButtonComponent = ({children, ...otherProps}) => (
    <button css={ButtonStyles} {...otherProps}>
        {children}
    </button>
)

export default ButtonComponent