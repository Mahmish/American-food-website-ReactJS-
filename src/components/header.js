// import React from 'react';
import logo from '../assets/images/logo.png';
import {Link} from 'react-router-dom';
import React, { useState, useRef, useEffect } from "react";

export default function SearchBox() {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  // Close input when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
    
  return (
    <div>
       <header>
        <div class="top-header">
            <div class="container">
                <div class="row align-items-center">
                    {/* search section  */}
                    <div class="search-column col-lg-3 col-sm-4 col-md-4 col-12 col-xl-3 col-xxl-3">
                        <div class="search">
                            <form>
                                <input type="text" placeholder="Search here"/>
                                <button className="" type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
                                </form>
                        </div>
                    </div>
                    {/* logo section  */}
                    <div class="logo-column col-lg-6 col-sm-4 col-md-4 col-12 col-xl-6 col-xxl-6">
                        <div class="logo text-center">
                            <Link to="/"><img src={logo} alt=""/></Link>
                        </div>
                    </div>
                    {/* registration section  */}
                    <div class="register-column col-lg-3 col-sm-4 col-md-4 p-0 col-12 col-xl-3 col-xxl-3">
                        <div class="register text-white text-start">
                            <div className='login_link'>
                                <Link to="/register"><span className='m-0'>Register/Login</span></Link>
                           {/* add to cart icon  */}
                                <i class="fa-solid fa-heart"></i>
                                <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i>
                                <span className='cart_number'>0</span>
                                <span className='wishlist_number'>0</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* col section  */}
                    <div className="search-col" ref={searchRef}>
                    <form>
                        {showSearch && (
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Search..."
                            autoFocus
                        />
                        )}
                        <button
                        className="search_btn"
                        onClick={(e) => {
                            e.preventDefault();
                            setShowSearch(!showSearch);
                        }}
                        >
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                        <Link to="/register"><i class="fa-solid fa-user"></i></Link>
                        <Link><i class="fa-solid fa-heart"></i></Link>
                        <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
                    </div>
                    </div>
                    
                </div>
            </div>
        
              {/* col navbar section  */}
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/aboutUs">ABOUT US</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/service">SERVICE</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/pricing">PRICING</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/blog">BLOG</Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="/contact">CONTACT US</Link>
                        </li>
                    </ul>
                    </div>
                </div>
              </nav>
              {/* navbar section  */}
        <div class="bottom-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2">

                    </div>
                    <div class="col-lg-8 col-sm-12 col-md-12 col-12 col-xl-8 col-xxl-8 text-center text-white">
                        <div class="menu">
                            <ul>
                                <Link to='/'><li>Home</li></Link>
                                <Link to='/aboutUs'><li>About us</li></Link>
                                <Link to='/service'><li>Service</li></Link>
                                <Link to='/pricing'><li>Pricing</li></Link>
                                <Link to='/blog'><li>Blog</li></Link>
                                <Link to='/contact'><li>Contact</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </div>
  )
}
