import React from 'react'
import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer'


function Details() {
  return (
   <>
   <Header/>
   <section class="form">

<div class="checkout-items"/>
    <h1>My items Details</h1>
    <p>Please check your items and confirm it </p>

    <div class="row-1"/>
        <h4>Blue berries</h4>
        <div class="row-1-1">
            <h4>1</h4>
            <h4>$39.00</h4>
        </div>
        </section>

    <div class="row-1">
        <h4>Blue berries</h4>
        <div class="row-1-1">
            <h4>1</h4>
            <h4>$39.00</h4>
        </div>
    </div>

    <div class="row-1">
        <h4>Blue berries</h4>
        <div class="row-1-1">
            <h4>1</h4>
            <h4>$39.00</h4>
        </div>
    </div>
    <section class="main-wrapper">
        <div class="name">
            <p class="title">/</p>
            <div class="form-container">
                <label for="email">FULL NAME</label>
                <input class="custom-input" type="text" name="name" placeholder="Enter Your Name"/>

                <label for="phone">PHONE NUMBER</label>
                <input class="custom-input" type="text" name="name" placeholder="Enter Your Phone Number"/>

                <label class="mt-2" for="address">Street address or P.O. Box</label>
                <input class="custom-input" type="text" name="name" placeholder="Enter Your Address"/>
                <label for="ZIP">ZIP CODE</label>
                <input class="custom-input" type="text" name="name" placeholder="Enter Your Zip Code"/>
                <label for="apt">Apt, suite, unit, building, floor, etc.</label>
                <input class="custom-input" type="text" name="name"
                    placeholder="Enter Apt, suite, unit, building, floor, etc."/>
                <label for="phone">CITY</label>
                <input class="custom-input" type="text" name="name" placeholder="Enter Your City"/>
                <label for="phone">STATE</label>
                <input class="custom-input" type="text" name="name" placeholder="Enter Your State"/>




                <button class="custom-btn">Confirm and Submit</button>

                <p>"Have an account ?"
                    <a href="/">Sign In</a>
                </p>
            </div>
        </div>
    </section>
    <Footer/>
   </>
  )
}

export default Details;
