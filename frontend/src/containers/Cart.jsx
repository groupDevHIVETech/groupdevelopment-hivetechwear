import React from 'react'
import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer'
import Mask from '../assets/img/Mask Group 102.png'
import MG from '../assets/img/Mask Group 139.png'
import A from '../assets/img/Mask Group 140.png'
import B from '../assets/img/Mask Group 141.png'
import C from '../assets/img/adidas.png'

function Cart() {
  return (
  <>
  <Header/>
    <div class="cart-title">
   <h1>My Cart</h1>
    </div>
    <div class="content">
        <div class="firstcontent">
            <img src={ Mask } alt=""/>

            <div class="firstlast">
                <p>Adidas Yeezy</p>
                <p>Adidas Originals</p>
                <div class="adidas">
                    $59 
                    <button>Remove</button>

                </div>
            </div>
        </div>
        <div class="firstcontent">
            <img src={ MG } alt=""/>

            <div class="firstlast">
                <p>Adidas Yeezy</p>
                <p>Adidas Originals</p>
                <div class="adidas">
                    $59 
                    <button>Remove</button>

                </div>
            </div>

        </div>
        <div class="firstcontent">
            <img src={ A } alt=""/>
            <div class="firstlast">
                <p>Adidas Yeezy</p>
                <p>Adidas Originals</p>
                <div class="adidas">
                    $59 
                    <button>Remove</button>

                </div>
            </div>
        </div>
        <div class="firstcontent">
            <img src={ B } alt=""/>
            <div class="firstlast">
                <p>Adidas Yeezy</p>
                <p>Adidas Originals</p>
                <div class="adidas">
                    $59 
            <button>Remove</button>
                </div>
            </div>
        </div>
        <div class="firstcontent">
            <img src={ C } alt=""/>
            <div class="firstlast">
                <p>Adidas Yeezy</p>
                <p>Adidas Originals</p>
                <div class="adidas">
                    $59 Remove
                    <button>Remove</button>

                </div>
            </div>
        </div>

    </div>
    <hr/>
    <div class="checkout">
        <div>
        <div>
        <div class="subtotal">
            <p>SUBTOTAL </p>
        </div>   
            <p>$3050</p>
        </div>
        <p>5 ITEMS</p>
       </div>
        <input class="button" type="button" value="PROCEED TO CHECKOUT"/>
    </div>
    <Footer/>
    </>
  )
}

export default Cart;
