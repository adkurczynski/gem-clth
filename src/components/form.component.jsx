/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React from 'react'

const InputStyles = css`
  padding: 12px 20px;
  margin: 8px 0;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`
const InputWrapperStyles = css`
    width:100%;
    display:flex;
`
const FormInpuComponent = ({handleChange, label, ...otherProps}) => (
    <div css={InputWrapperStyles}>
        <input css={InputStyles} onChange={handleChange} {...otherProps}></input>
        {
            label ?
            {label}
            : null
        }
    </div>
)

export default FormInpuComponent