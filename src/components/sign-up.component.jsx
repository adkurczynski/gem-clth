/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React from 'react'
import { useState } from 'react'
import FormInputComponent from './form.component'
import ButtonComponent from './button.component'
import { auth, createUserProfileDocument} from '../firebase/firebase.utils'
import { createUserWithEmailAndPassword } from 'firebase/auth'


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

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirm] = useState('')
    const [displayName, setDisplayName] = useState('')

    const handleSubmit = async event  => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('Passwords are different')
            return
        }

        try {
            const {user} = createUserWithEmailAndPassword(auth, email, password);
            createUserProfileDocument(user, {displayName})
            setEmail('')
            setPassword('')
            setConfirm('')
            setDisplayName('')
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div css={SignInWrapperStyles}>
            <div css={SignInFormStyles}>
                <h2>SIGN UP</h2>
                <form onSubmit={handleSubmit}>
                    <FormInputComponent name='displayName' value={displayName} type='text' required onChange={event => setDisplayName(event.target.value)}></FormInputComponent>
                    <label>Display Name</label>
                    <FormInputComponent name='email' value={email} type='email' required onChange={event => setEmail(event.target.value)}></FormInputComponent>
                    <label>Email</label>
                    <FormInputComponent name='password' value={password} type='password' required onChange={event => setPassword(event.target.value)}></FormInputComponent>
                    <label>Password</label>
                    <FormInputComponent name='confirmPassword' value={confirmPassword} type='password' required onChange={event => setConfirm(event.target.value)}></FormInputComponent>
                    <label>Confirm Password</label>
                    <ButtonComponent type='submit'>Submit</ButtonComponent>
                </form>
            </div>
        </div>
    )
}

export default SignUp