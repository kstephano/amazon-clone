import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

import '../css/Header.css'
import logo from '../Assets/amazon-logo-transparent.png'

function Header() {
    return (
        <div className='header'>
            <img className='header__logo'
                src={logo} 
                alt='Amazon Logo'
            />
            <div className='header__search'>
                <input className='header__search-input' type='text'/>
                <SearchIcon className='header__search-icon' />
            </div>
            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__option-line-one'>Hello Guest</span>
                    <span className='header__option-line-two'>Sign In</span>
                </div>

                <div className='header__option'>
                    <span className='header__option-line-one'>Returns</span>
                    <span className='header__option-line-two'>& Orders</span>
                </div>

                <div className='header__option-basket'>
                    <ShoppingBasketIcon />
                    <span className='header__option-line-two header__basket-count'>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
