import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Helmet } from 'react-helmet'
import axios from 'axios'
function Services() {
  // useffect hooks called function automatic wehen com load
  useEffect(() => {
    fetch();
  })

  const [data, setData] = useState([]);
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/artist`);
    console.log(res.data);
    setData(res.data);
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
        {/* right content */}
        <div className="right-content-section">
          {/* inner banner */}
          <div className="inner-banner">
            <div className="w3l-breadcrumb">
              <div className="container">
                <h4 className="inner-text-title font-weight-bold text-white mb-sm-3 mb-2">Top Quality Services</h4>
                <ul className="breadcrumbs-custom-path">
                  <li><a href="index.html">Home</a></li>
                  <li className="active"><span className="fa fa-chevron-right mx-2" aria-hidden="true" />Services
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* //inner banner */}
          {/* services section */}
          <div className="best-rooms py-5">
            <div className="container py-md-5 py-4">
              <h3 className="title-style">Our Artist  </h3>
              <p className="sub-title">We offer best range of beauty services</p>
              <div className="row mt-5">
                {
                  data && data.map((value, index, arr) => {
                    return (
                      <div className="maghny-gd-1 col-md-4">
                        <div className="maghny-grid">
                          <figure className="effect-lily border-radius">
                            <img height={"300px"} src={value.image} alt />
                            <figcaption>
                              <div>
                                <h4>{value.shop_name}</h4>
                                <p>View </p>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    )
                  })
                }

              </div>
            </div>
          </div>
          {/* //services section */}
          {/* card section */}
          <section className="w3l-features-4">
            <div className="features4-block py-5">
              <div className="container py-md-5 py-4">
                <h3 className="title-style">Makeup Services</h3>
                <p className="sub-title">We offer best range of beauty services</p>
                <div className="row features4-grids mt-5">
                  <div className="col-md-4 col-sm-6">
                    <div className="features4-grid">
                      <div className="feature-images">
                        <span className="fa fa-paint-brush" aria-hidden="true" />
                      </div>
                      <h5><a href="#about">Facial Makeup</a></h5>
                      <p>Lorem ante ipsum primis in faucibus orci luctu.</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mt-sm-0 mt-4">
                    <div className="features4-grid active">
                      <div className="feature-images">
                        <span className="fa fa-eye" aria-hidden="true" />
                      </div>
                      <h5><a href="#about" className="active">Eye Makeup</a></h5>
                      <p>Lorem ante ipsum primis in faucibus orci luctu.</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mt-md-0 mt-4">
                    <div className="features4-grid">
                      <div className="feature-images">
                        <span className="fa fa-sign-language" aria-hidden="true" />
                      </div>
                      <h5><a href="#about">Hair Makeup</a></h5>
                      <p>Lorem ante ipsum primis in faucibus orci luctu.</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mt-4">
                    <div className="features4-grid">
                      <div className="feature-images">
                        <span className="fa fa-eye-slash" aria-hidden="true" />
                      </div>
                      <h5><a href="#about">Eyebrows</a></h5>
                      <p>Lorem ante ipsum primis in faucibus orci luctu.</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mt-4">
                    <div className="features4-grid">
                      <div className="feature-images">
                        <span className="fa fa-smile-o" aria-hidden="true" />
                      </div>
                      <h5><a href="#about">Face Makeup</a></h5>
                      <p>Lorem ante ipsum primis in faucibus orci luctu.</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mt-4">
                    <div className="features4-grid">
                      <div className="feature-images">
                        <span className="fa fa-scissors" aria-hidden="true" />
                      </div>
                      <h5><a href="#about">Haircutting</a></h5>
                      <p>Lorem ante ipsum primis in faucibus orci luctu.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* //card section */}
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

export default Services