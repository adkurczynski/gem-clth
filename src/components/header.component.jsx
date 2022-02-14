/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { signOut, getAuth } from 'firebase/auth'

import React from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../src/gem.svg'
import Cart from './cart.component'
import { auth } from '../firebase/firebase.utils'
import CartDropdown from './cart-dropdown.component'

const LogoStyles = css`
    height: 40px;
    width: 40px;
`

const HeaderStyles = css`
    padding: 20px 80px 0 80px;
    display: flex;
    align-items:center;
    justify-content: space-between;
`
const MenuContainerStyles = css`
    display:flex;
    width:30%;
    justify-content: space-between;
    align-items:center;
`

const SignOutStyles = css`
    cursor: pointer;
`
const Header = ({currentUser, hidden}) => {
    const logOut = () => {
        signOut(auth).then(() => {
            console.log("LOG OUT")
          }).catch((error) => {
            console.log(error)
          });
    }
    return(      
        <div css={HeaderStyles}>
            <Link to="/">
                <Logo css={LogoStyles}/>
            </Link>
            <div css={MenuContainerStyles}>
                <div>
                    <Link to='/store'>SHOP</Link>
                </div>
                <div>
                    <Link to='/contact'>CONTACT</Link>
                </div>
                <div>
                    {currentUser ?
                    <div css={SignOutStyles} onClick={() => logOut()}>SIGN OUT</div>
                    :
                    <Link to='/signin'>SIGN IN</Link>
                    }
                </div>
                <Cart />
            </div>
            {
            hidden ? null :<CartDropdown />
            }
        </div>

    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden

})

export default connect(mapStateToProps)(Header)