import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    
    <div className="header-section">
        <Helmet>
         
        </Helmet>
      {/*header*/}
      <header id="site-header" className="fixed-top">
        <div className="container p-lg-0">
          <nav className="navbar navbar-expand-lg stroke p-lg-0">
            <h1>
              <Link className="navbar-brand" to="/"><i className="fa fa-snowflake-o mr-2" aria-hidden="true" />Beauty Spot</Link>
            </h1>

            <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon fa icon-expand fa-bars" />
              <span className="navbar-toggler-icon fa icon-close fa-times" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">Signup Us</NavLink>
                </li>
                {/* search button */}
                <div className="search-right">
                  <form action="#search" method="GET" className="search-box d-flex align-items-center position-relative">
                    <div className="input-search">
                      <input type="search" placeholder="Enter Keyword" name="search" required="required" autofocus className="search-popup" />
                    </div>
                    <button type="submit" className="btn search-btn"><i className="fa fa-search" aria-hidden="true" /></button>
                  </form>
                </div>
                {/* //search button */}
              </ul>
            </div>
            {/* toggle switch for light and dark theme */}
            <div className="cont-ser-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="mode-container">
                      <i className="gg-sun" />
                      <i className="gg-moon" />
                    </div>
                  </label>
                </div>
              </nav>
            </div>
            {/* //toggle switch for light and dark theme */}
            <div className="cont-details mt-5">
              <div className="d-flex text-disp-content">
                <i className="fa fa-clock-o mr-2" aria-hidden="true" />
                <div className="cont-right-dis">
                  <label>Mon-Fri: 08.00 - 19.00</label>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <div className="d-flex text-disp-content mt-4 pt-xl-2">
                <i className="fa fa-volume-control-phone mr-2" aria-hidden="true" />
                <div className="cont-right-dis">
                  <label>Call Us</label>
                  <p><a href="tel:+1(21) 234 4567">+1(21) 112 7368</a></p>
                </div>
              </div>
            </div>
            <div className="main-social-top mt-5 pt-xl-4 text-center">
              <ul>
                <li><a href="#facebook" className="facebook"><span className="fa fa-facebook" /></a></li>
                <li><a href="#twitter" className="twitter"><span className="fa fa-twitter" /></a></li>
                <li> <a href="#instagram" className="instagram"><span className="fa fa-instagram" /></a>
                </li>
                <li><a href="#linkedin" className="linkedin"><span className="fa fa-linkedin" /></a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/*//header*/}
    </div>

  )
}

export default Header