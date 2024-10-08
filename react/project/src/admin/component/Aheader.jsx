import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'

function Aheader() {
    return (
        <div>
                <Helmet>
            
                <link href="admin/assets/css/bootstrap.css" rel="stylesheet" />
                <link href="admin/assets/css/font-awesome.css" rel="stylesheet" />
                <link href="admin/assets/css/style.css" rel="stylesheet" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
                </Helmet>
                <div className="navbar navbar-inverse set-radius-zero">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand" href="index.html">
                                <img src="admin/assets/img/logo.png" />
                            </a>
                        </div>
                        <div className="right-div">
                            <a href="#" className="btn btn-danger pull-right">LOG ME OUT</a>
                        </div>
                    </div>
                </div>
                {/* LOGO HEADER END*/}
                <section className="menu-section">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-12">
                                <div className="navbar-collapse collapse ">
                                    <ul id="menu-top" className="nav navbar-nav navbar-right">
                                        <li><NavLink to="/dashboard" className="menu-top-active">DASHBOARD</NavLink></li>
                                        <li><NavLink to="/manage_customer">Customer</NavLink></li>
                                        <li>
                                            <a href="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Location<i className="fa fa-angle-down" /></a>
                                            <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/add_location">Add</NavLink></li>
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/manage_location">Manage</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Artist<i className="fa fa-angle-down" /></a>
                                            <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/add_artist">Add</NavLink></li>
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/manage_artist">Manage</NavLink></li>
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/manage_services">Services</NavLink></li>
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/manage_work">Work</NavLink></li>
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/manage_appointment">Appointment</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink to="/manage_feedback">Feedback</NavLink></li>
                                        <li><NavLink to="/manage_contact">Contact</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              
        </div>
    )
}

export default Aheader