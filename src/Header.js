import React from 'react';
import logo from "./assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
  const [{basket}] = useStateValue();
  console.log(basket);
  return (
    <nav className='header'>
        <Link to="/">
            <img className="header__logo" src={logo} alt="logo"></img>
        </Link>
        
      <div className='header__search'>
        <input type="text" class="header__searchInput"/>
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>

      <div class="header__nav">
        <Link to="/login" className="header__link">
        <div class="header__option">
          <span className='header__optionLineOne'>Hello Kushal</span>
          <span className='header__optionLineTwo'>Sign In</span>
        </div>
        </Link>

        <Link to="/" className="header__link">
        <div class="header__option">
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>Orders</span>
        </div>
        </Link>

        <Link to="/" className="header__link">
        <div class="header__option">
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
        </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
          </div>

        </Link>
      </div>
    </nav>
  )
}

export default Header
