/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React from 'react'
import { useState } from 'react'
import FormInputComponent from './form.component'
import ButtonComponent from './button.component'

import { signInWithGoogle, auth } from '../firebase/firebase.utils'
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignInWrapperStyles = css`
    display:flex;
    width: 100%;
    justify-content:space-between;

`

const SignInFormStyles = css`
    display:flex;
    width:100%;
    align-items:center;
    justify-content:space-around;
    flex-direction: column;
    padding:40px;
    > form {
        width:100%;
        display:flex;
        flex-direction: column;
        align-items:center;
    }
`

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = event  => {
        event.preventDefault();

        try {
            signInWithEmailAndPassword(auth, email, password)
            .then(setEmail(''))
            .then(setPassword(''))
        }catch(error){
            console.log(error)
        }

    }

    return(
        <div css={SignInWrapperStyles}>
            <div css={SignInFormStyles}>
                <h2>SIGN IN</h2>
                <form onSubmit={handleSubmit}>
                    <FormInputComponent name='email' value={email} type='email' required onChange={event => setEmail(event.target.value)}></FormInputComponent>
                    <label>Email</label>
                    <FormInputComponent name='password' value={password} type='password' required onChange={event => setPassword(event.target.value)}></FormInputComponent>
                    <label>Password</label>
                    <ButtonComponent type='submit' value='Submit Form' >Submit</ButtonComponent>
                    <ButtonComponent onClick={signInWithGoogle}>Sign in with google</ButtonComponent>
                </form>
            </div>
        </div>
    )
}

export default SignIn