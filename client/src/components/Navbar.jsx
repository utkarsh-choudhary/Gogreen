import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../utils/Context'
import { useAuth0 } from "@auth0/auth0-react";





function Navbar() {
    const { cartCount } = useContext(Context)
    const { loginWithRedirect, logout } = useAuth0();

    const { isAuthenticated, user } = useAuth0()

    return (
        <div>
            <div className="preloader d-flex align-items-center justify-content-center">
                <div className="preloader-circle" />
                <div className="preloader-img">
                    <img src="img/core-img/leaf.png" alt />
                </div>
            </div>
            <header className="header-area">
                {/* ***** Top Header Area ***** */}
                <div className="top-header-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="top-header-content d-flex align-items-center justify-content-between">
                                    {/* Top Header Content */}
                                    <div className="top-header-meta">
                                        <a href="#" data-toggle="tooltip" data-placement="bottom" title="infodeercreative@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true" /> <span>Email: departmentOfIt@gmail.com</span></a>
                                        <a href="#" data-toggle="tooltip" data-placement="bottom" title="+1 234 122 122"><i className="fa fa-phone" aria-hidden="true" /> <span>Call Us: +91 93066 86556</span></a>
                                    </div>
                                    {/* Top Header Content */}
                                    <div className="top-header-meta d-flex" style={{justifyContent:'space-around',width:'300px'}}>
                                        {/* Language Dropdown */}
                                        {/* Login */}
                                        <div className="login">
                                            {
                                                isAuthenticated ? (<a style={{ cursor: 'pointer' }} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><i className="fa fa-user" aria-hidden="true" /> <span>Logout</span></a>) : (
                                                    <a style={{ cursor: 'pointer' }} onClick={() => loginWithRedirect()}><i className="fa fa-user" aria-hidden="true" /> <span>Login</span></a>)
                                            }
                                        </div>
                                        {/* Cart */}
                                        <div className="cart">
                                            <Link to={'/cart'}>
                                                <i className="fa fa-shopping-cart" aria-hidden="true" />
                                                <span>Cart {!!cartCount && <span className="cart-quantity">({cartCount})</span>}</span>
                                            </Link>
                                        </div>
                                        <div className="cart">
                                            <Link >
                                                {
                                                    isAuthenticated && (
                                                        <div style={{display:'flex',marginLeft:'10px',alignItems:'center'}} >
                                                            <img src={user.picture} alt="Rounded Image" style={{width: '30px', height: '30px', borderRadius: '50%', display: 'block' ,marginRight:'5px'}} />
                                                                <span className="cart-quantity">{user.name}</span>
                                                        </div>
                                                    )
                                                }
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ***** Navbar Area ***** */}
                <div className="alazea-main-menu">
                    <div className="classy-nav-container breakpoint-off">
                        <div className="container">
                            {/* Menu */}
                            <nav className="classy-navbar justify-content-between" id="alazeaNav">
                                {/* Nav Brand */}
                                <Link to={'/'} className="nav-brand"><img src="img/core-img/logo.png" alt /></Link>
                                {/* Navbar Toggler */}
                                <div className="classy-navbar-toggler">
                                    <span className="navbarToggler"><span /><span /><span /></span>
                                </div>
                                {/* Menu */}
                                <div className="classy-menu">
                                    {/* Close Button */}
                                    <div className="classycloseIcon">
                                        <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                                    </div>
                                    {/* Navbar Start */}
                                    <div className="classynav">
                                        <ul>
                                            <li><Link to={'/'}>Home</Link></li>
                                            <li><Link to={'/about'}>About</Link></li>
                                            <li><Link to={'/shop'}>Shop</Link></li>
                                            <li><Link to={'/portfolio'}>Portfolio</Link></li>
                                            <li><Link to={'/contact'}>Contact</Link></li>
                                        </ul>
                                        {/* Search Icon */}
                                        <div id="searchIcon">
                                            <i className="fa fa-search" aria-hidden="true" />
                                        </div>
                                    </div>
                                    {/* Navbar End */}
                                </div>
                            </nav>
                            {/* Search Form */}
                            <div className="search-form">
                                <form action="#" method="get">
                                    <input type="search" name="search" id="search" placeholder="Type keywords & press enter..." />
                                    <button type="submit" className="d-none" />
                                </form>
                                {/* Close Icon */}
                                <div className="closeIcon"><i className="fa fa-times" aria-hidden="true" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
