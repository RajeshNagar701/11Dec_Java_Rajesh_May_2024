import React, { useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Helmet } from 'react-helmet'

import axios from 'axios';
import { toast } from 'react-toastify'

function Signup() {

  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    password: "",
    image: "",
    status: ""
  });

  const changeHandel = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  function validation() {

    var result = true;
    if (formvalue.name == "") {
      result = false;
      toast.error('Name field is required');
      return false;
    }
    if (formvalue.email == "") {
      result = false;
      toast.error('email field is required');
      return false;
    }
    if (formvalue.mobile == "") {
      result = false;
      toast.error('mobile field is required');
      return false;
    }
    if (formvalue.password == "") {
      result = false;
      toast.error('password field is required');
      return false;
    }
    if (formvalue.image == "") {
      result = false;
      toast.error('image field is required');
      return false;
    }
    return result;

  }


  const onSubmithandel = async (e) => {
    e.preventDefault(); // on submit not refresh page
    if (validation()) {
      const res = await axios.post(`http://localhost:3000/customer`, formvalue);
      console.log(res);
      if (res.status == 201) {
        alert('Signup suuccess !');
        setFormvalue({ ...formvalue, name: "", email: "", mobile: "", password: "", image: "" });
        return false;
      }
    }
  }

  return (
    <div>

      <Helmet>
        <link href="//fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@200;300;400;600;700;900&display=swap"
          rel="stylesheet" />
        <link href="//fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="website/assets/css/style-starter.css" />

        <script src="website/assets/js/theme-change.js"></script>
        <script src="website/assets/js/jquery.min.js"></script>
        <script src="website/assets/js/modernizr-2.6.2.min.js"></script>
        <script src="website/assets/js/jquery.zoomslider.min.js"></script>
        <script src="website/assets/js/jquery-3.3.1.min.js"></script>
        <script src="website/assets/js/owl-carousel.js"></script>
        <script src="website/assets/js/bootstrap.min.js"></script>
      </Helmet>
      <div className="main-content">
        <Header />
        {/* //left header */}
        {/* right content */}
        <div className="right-content-section">
          {/* inner banner */}
          <div className="inner-banner">
            <section className="w3l-breadcrumb">
              <div className="container">
                <h4 className="inner-text-title font-weight-bold text-white mb-sm-3 mb-2">Signup Us</h4>
                <ul className="breadcrumbs-custom-path">
                  <li><a href="index.html">Home</a></li>
                  <li className="active"><span className="fa fa-chevron-right mx-2" aria-hidden="true" /> Signup
                    Us</li>
                </ul>
              </div>
            </section>
          </div>
          {/* //inner banner */}
          {/* contact page */}
          <section className="w3l-contacts-12 py-5">
            <div className="container py-lg-5 py-md-4 py-3">
              <h3 className="title-style">Signup Us</h3>
              <div className="row contact-grids mt-5">
                <div className="col-lg-12 contacts12-main">
                  <form action="" method="post" className="signin-form">
                    <div className="row input-grids">
                      <div className="col-sm-6">
                        <input type="text" name="name" value={formvalue.name} onChange={changeHandel} placeholder="Full name" className="contact-input" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" name="mobile" value={formvalue.mobile} onChange={changeHandel} placeholder="Phone number" className="contact-input" />
                      </div>

                    </div>
                    <div className="row input-grids my-4">

                      <div className="col-sm-6 mt-sm-0 mt-4">
                        <input type="email" name="email" value={formvalue.email} onChange={changeHandel} placeholder="Your email" className="contact-input" />
                      </div>
                      <div className="col-sm-6 mt-sm-0 mt-4">
                        <input type="password" name="password" value={formvalue.password} onChange={changeHandel} placeholder="Your Password" className="contact-input" />
                      </div>
                    </div>
                    <div className="row input-grids my-4">
                      <div className="col-sm-12 mt-sm-0 mt-4">
                        <input type="url" name="image" value={formvalue.image} onChange={changeHandel} placeholder="Your Image URL" className="contact-input" />
                      </div>
                    </div>
                    <button type="submit" onClick={onSubmithandel} className="btn btn-style mt-5">Signup</button>
                  </form>
                </div>

              </div>
            </div>
          </section>
          {/* //contact page */}
          <Footer />
        </div>
        {/* //right content */}
      </div>
      {/* Js scripts */}
      {/* move top */}
      <button onclick="topFunction()" id="movetop" title="Go to top">
        <span className="fa fa-level-up" aria-hidden="true" />
      </button>
    </div>

  )
}

export default Signup