import React from 'react'
import Footer from '../components/Common/Footer'
import Header from '../components/Common/Header'

function ThankYou() {
  return (
    <>
    <Header/>
    <div class="thank-you">
        <h1>THANK YOU FOR ORDERING</h1>
        <p>Thank you for your ordering. We received your request.<br/>
            Our stuff will be contacting with you to tell next steps.</p>
    </div>
    <Footer/>
    </>
  )
}

export default ThankYou