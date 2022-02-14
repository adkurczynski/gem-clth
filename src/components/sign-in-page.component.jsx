/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React from 'react'

import SignIn from './sign-in.component'
import SignUp from './sign-up.component'

const SignInPageStyles = css`
    display:flex;
`

const SignInPage = () => {
    return(
        <div css={SignInPageStyles}>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInPage