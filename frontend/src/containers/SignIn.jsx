import React from 'react'
import Footer from '../components/Common/Footer'
import Header from '../components/Common/Header'

function SignIn() {
  return (
    <>
    <Header/>
    <section class="main-wrapper">
        <div class="sign-up">
            <p class="title">SIGN IN</p>
            <div class="form-container">
                <label for="email">Email Address</label>
                <input class="custom-input" type="text" name="name" placeholder="Enter Your Email"/>
                <label class="mt-2" for="email">Password</label>
                <input class="custom-input" type="password" name="password" placeholder="Enter confirm password"/>
                <button class="custom-btn">SIGN UP</button>
                <p>"Have an account ?
                <a  href="/">Sign In</a>
                </p>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default SignIn