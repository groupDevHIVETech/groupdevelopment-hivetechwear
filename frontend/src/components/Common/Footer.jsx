import React from 'react'
import fb from '../../assets/img/icons8-facebook-150 (1).svg'
import insta from '../../assets/img/icons8-instagram-150.svg'
function Footer() {
  return (
    <>
    <footer>
        <div class="foot-main">
            <div class="foot-left">
                <h1>Shop and Learn</h1>
                <p>Sign up</p>
                <p>Sign in</p>
                <p>Item lists</p>
            </div>
            <div class="foot-right">
                <h1>Support</h1>
                <p>Contact Us</p>
            </div>
        </div>
        <div class="foot-logos">
            <img src={fb } alt=""/>
            <img src={ insta } alt=""/>
        </div>
        <div class="copyright">
            <p>Copyright © 2021 HIVE Techwear. All rights reserved.  Privacy Policy  Terms of Use  Sales Policy  Legal  Site Map</p>
        </div>
    </footer>
    </>
  )
}

export default Footer
