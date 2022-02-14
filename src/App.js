import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useParams} from "react-router-dom";
import LandingPage from "./components/landingpage.component";
import StorePage from "./components/storepage.component";
import Header from "./components/header.component";
import SignInPage from "./components/sign-in-page.component";
import SummaryPage from "./components/summarypage.component"
import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";
import { setUser } from "./redux/user.actions";

import './App.css'
import CategoryPage from "./components/category-page";
import ContactPage from "./components/contact-page.component";


class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const {setUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, snapshot => {
          setUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }
      setUser(userAuth)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return(
  <div>
  <Header/>
  <Routes>
      <Route exact path='/' element={<LandingPage />}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/store' element={<StorePage />}/>
      <Route path='/summary' element={<SummaryPage />}/>
      <Route path='/products/:category' element={<CategoryPage/>}/>
      <Route path='/signin' element={this.props.currentUser ? <Navigate to= '/' /> : <SignInPage/>}/>
  </Routes>
  </div>
    )
  }
}
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
