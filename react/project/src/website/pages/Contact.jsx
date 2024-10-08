import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Helmet } from 'react-helmet'
function Contact() {
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
        <Header/>
        {/* //left header */}
        {/* right content */}
        <div className="right-content-section">
          {/* inner banner */}
          <div className="inner-banner">
            <section className="w3l-breadcrumb">
              <div className="container">
                <h4 className="inner-text-title font-weight-bold text-white mb-sm-3 mb-2">Contact Us</h4>
                <ul className="breadcrumbs-custom-path">
                  <li><a href="index.html">Home</a></li>
                  <li className="active"><span className="fa fa-chevron-right mx-2" aria-hidden="true" /> Contact
                    Us</li>
                </ul>
              </div>
            </section>
          </div>
          {/* //inner banner */}
          {/* contact page */}
          <section className="w3l-contacts-12 py-5">
            <div className="container py-lg-5 py-md-4 py-3">
              <h3 className="title-style">Contact Us</h3>
              <p>Contact with us now</p>
              <div className="row contact-grids mt-5">
                <div className="col-lg-7 contacts12-main">
                  <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="signin-form">
                    <div className="row input-grids">
                      <div className="col-sm-6">
                        <input type="text" name="w3lName" placeholder="Full name" className="contact-input" />
                      </div>
                      <div className="col-sm-6 mt-sm-0 mt-4">
                        <input type="email" name="w3lSender" placeholder="Your email" className="contact-input" />
                      </div>
                    </div>
                    <div className="row input-grids my-4">
                      <div className="col-sm-6">
                        <input type="text" name="w3lSubect" placeholder="Subject" className="contact-input" />
                      </div>
                      <div className="col-sm-6 mt-sm-0 mt-4">
                        <input type="text" name="w3lName" placeholder="Phone number" className="contact-input" />
                      </div>
                    </div>
                    <textarea name="w3lMessage" placeholder="Type your message here" required defaultValue={""} />
                    <button className="btn btn-style mt-5">Send Message</button>
                  </form>
                </div>
                <div className="col-lg-5 contact-right mt-lg-0 mt-5">
                  <div className="details-style d-flex">
                    <span className="fa fa-map-marker" />
                    <div className="location-info">
                      <span>Location</span>
                      <p> Dolor sit, #PTH, 55030, 8500 Lorem Street</p>
                      <p>sed at ipsum, #2114 agro towers</p>
                      <p>United kingdom, UK.</p>
                    </div>
                  </div>
                  <div className="details-style d-flex">
                    <span className="fa fa-envelope-open" />
                    <div className="email-info">
                      <span>Have any Questions?</span>
                      <a href="mailto:hello@example.com">hello@example.com</a>
                    </div>
                  </div>
                  <div className="details-style d-flex">
                    <span className="fa fa-phone" />
                    <div className="email-info">
                      <span>Phone Number</span>
                      <a href="tel:(123) 456-78-90"> (123) 456-78-90</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27404345275!2d-118.69191921441556!3d34.02016130939095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1522474296007" allowFullScreen />
              </div>
            </div>
          </section>
          {/* //contact page */}
          <Footer/>
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

export default Contact