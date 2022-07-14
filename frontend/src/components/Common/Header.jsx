import React from 'react'

const Header = () => {
  return (
    <div>
       <header class="header">
        <a href="/">
            <img src="img/HIVETechwear.png" alt="" />

        </a>
        <label for="menu_toggle" class="menu_btn"></label>
        <div class="menu_box">

            <div class="search-bar">
                <input placeholder="Search" class="header-search" type="text" />
                <img src="img/search-icon.png" alt="" />
            </div>
            <div class="text">
                <p>SIGN UP</p>
                <p>SIGN IN</p>
            </div>
            <img src="img/local_mall_black_24dp.png" alt="" />
            <img src="img/Group 205.svg" alt="" />
        </div>
    </header>
    </div>
  )
}

export default Header
