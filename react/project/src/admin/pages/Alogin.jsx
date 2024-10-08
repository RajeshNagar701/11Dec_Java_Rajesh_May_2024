import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

function Alogin() {
  return (
    <div>
      <div>
        <Helmet>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
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
              <Link className="navbar-brand" to="admin-login">
                <img src="admin/assets/img/logo.png" />
              </Link>
            </div>
          </div>
        </div>

      </div>
      <div className="content-wrapper">
        <div className="container">
          <div className="row pad-botm">
            <div className="col-md-12">
              <h4 className="header-line">ADMIN Login</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="container mt-3">
                <h2>Admin Login Here</h2>
                <form action="">
                  <div className="mb-3 mt-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                  </div>
                  <div className="form-check mb-3">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              © 2014 Yourdomain.com |<a href="http://www.binarytheme.com/" target="_blank"> Designed by : binarytheme.com</a>
            </div>
          </div>
        </div>
      </section>
      <Helmet>
        <script src="admin/assets/js/jquery-1.10.2.js"></script>
        <script src="admin/assets/js/bootstrap.js"></script>
      </Helmet>
    </div>
  )
}

export default Alogin