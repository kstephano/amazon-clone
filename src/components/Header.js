import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import ListIcon from '@material-ui/icons/List';

import '../css/Header.css'
import logo from '../assets/amazon-logo-transparent.png'
import { Link } from 'react-router-dom';
import { useStateValue } from '../redux/StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <div className="navbar-main">
                <Link to="/">
                    <img className='navbar-main__logo'
                        src={logo} 
                        alt='Amazon Logo'
                    />
                </Link>

                <div className='navbar-main__search'>
                    <input className='navbar-main__search-input' type='text'/>
                    <SearchIcon className='navbar-main__search-icon' />
                </div>
                <div className='navbar-main__nav'>
                    <Link to="/login" className="navbar-main__login-link">
                        <div className='navbar-main__option'>
                            <span className='navbar-main__option-line-one'>Hello Guest</span>
                            
                                <span className='navbar-main__option-line-two'>Sign In</span>
                        
                        </div>
                    </Link>

                    <div className='navbar-main__option'>
                        <span className='navbar-main__option-line-one'>Returns</span>
                        <span className='navbar-main__option-line-two'>& Orders</span>
                    </div>

                    <Link to="/checkout">
                        <div className='navbar-main__option-basket'>
                            <ShoppingBasketIcon />
                            <span className='navbar-main__option-line-two navbar-main__basket-count'>
                                {basket?.length}
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
            
            <div className="navbar-shop">
                <div className="navbar-shop__left">
                    <div className="navbar-shop__option navbar-shop__option-one">
                        <ListIcon className="navbar-shop__list-icon" />
                        <span className="navbar-shop__option-text navbar-shop__option-one-text">All</span>
                    </div>
                    <div className="navbar-shop__option">
                        <span className="navbar-shop__option-text">Grocery</span>
                    </div>
                    <div className="navbar-shop__option">
                        <span className="navbar-shop__option-text">Prime</span>
                    </div>
                    <div className="navbar-shop__option">
                        <span className="navbar-shop__option-text">Prime Video</span>
                    </div>
                    <div className="navbar-shop__option">
                        <span className="navbar-shop__option-text">Browsing History</span>
                    </div>
                    <div className="navbar-shop__option">
                        <span className="navbar-shop__option-text">Free Delivery</span>
                    </div>
                    <div className="navbar-shop__option">
                        <span className="navbar-shop__option-text">Buy Again</span>
                    </div>
                    <div className="navbar-shop__option">
                    <   span className="navbar-shop__option-text">Gift Cards & Top Up</span>
                    </div>
                    <div className="navbar-shop__option">
                        <span className="navbar-shop__option-text">Sports & Outdoors</span>
                    </div>
                    <div className="navbar-shop__option">
                        <span className="navbar-shop__option-text">Beauty</span>
                    </div>
                    <div className="navbar-shop__option">
                        <span className="navbar-shop__option-text">Pet Supplies</span>
                    </div>
                    <div className="navbar-shop__option">
                        <span className="navbar-shop__option-text">Shopper Toolkit</span>
                    </div>
                    <div className="navbar-shop__option">
                        <span className="navbar-shop__option-text">Vouchers</span>
                    </div>
                </div>
               <div className="navbar-shop__right">
                    <div className="navbar-shop__option">
                        <span className="navbar-shop__option-text"></span>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Header
