import React, { useEffect } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Helmet } from 'react-helmet'


function Index() {
  useEffect(() => {
  })

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

        <script src="website/assets/js/owl-carousel.js"></script>
        <script src="website/assets/js/bootstrap.min.js"></script>

      </Helmet>

      <div className="main-content">

        <Header />

        {/* right content */}
        <div className="right-content-section">
          {/* banner section */}
          <section className="w3l-main-slider" id="home">
            <div className="banner-content">
              <div id="demo-1" data-zs-src="[&quot;website/assets/images/banner1.jpg&quot;, &quot;website/assets/images/banner2.jpg&quot;,&quot;website/assets/images/banner3.jpg&quot;,&quot;website/assets/images/banner4.jpg&quot;,&quot;website/assets/images/banner5.jpg&quot;]" data-zs-overlay="dots">
                <div className="demo-inner-content">
                  <div className="container">
                    <div className="banner-info">
                      <h3>Everthing is possible with our salon!</h3>
                      <p className="mt-1">Welcome to our Beauty Spot &amp; Beauty Salons!</p>
                      <a className="btn btn-style mt-4" href="#appointment">Make An Appointment</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* //banner section */}
          {/* services section */}
          <div className="best-rooms py-5">
            <div className="container py-md-5 py-4">
              <h3 className="title-style">Our Services</h3>
              <p className="sub-title">We offer best range of beauty services</p>
              <div className="row mt-5">
                <div className="maghny-gd-1 col-md-4">
                  <div className="maghny-grid">
                    <figure className="effect-lily border-radius">
                      <img className="img-fluid" src="website/assets/images/img1.jpg" alt />
                      <figcaption>
                        <div>
                          <h4>Makeup</h4>
                          <p>From 36$ </p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="maghny-gd-1 col-md-4 mt-md-0 mt-4">
                  <div className="maghny-grid">
                    <figure className="effect-lily border-radius">
                      <img className="img-fluid" src="website/assets/images/img2.jpg" alt />
                      <figcaption>
                        <div>
                          <h4>Hairdressing</h4>
                          <p>From 63$ </p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="maghny-gd-1 col-md-4 mt-md-0 mt-4">
                  <div className="maghny-grid">
                    <figure className="effect-lily border-radius">
                      <img className="img-fluid" src="website/assets/images/img3.jpg" alt />
                      <figcaption>
                        <div>
                          <h4>Massage Therapy</h4>
                          <p>From 28$ </p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="maghny-gd-1 col-md-4 mt-4">
                  <div className="maghny-grid">
                    <figure className="effect-lily border-radius">
                      <img className="img-fluid" src="website/assets/images/img4.jpg" alt />
                      <figcaption>
                        <div>
                          <h4>Pedicure</h4>
                          <p>From 67$ </p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="maghny-gd-1 col-md-4 mt-4">
                  <div className="maghny-grid">
                    <figure className="effect-lily border-radius">
                      <img className="img-fluid" src="website/assets/images/img5.jpg" alt />
                      <figcaption>
                        <div>
                          <h4>Hair Style</h4>
                          <p>From 76$ </p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="maghny-gd-1 col-md-4 mt-4">
                  <div className="maghny-grid">
                    <figure className="effect-lily border-radius">
                      <img className="img-fluid" src="website/assets/images/img6.jpg" alt />
                      <figcaption>
                        <div>
                          <h4>aromatherapy</h4>
                          <p>From 36$ </p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //services section */}
          {/* providing services section */}
          <section className="w3l-content-11-main">
            <div className="content-design-11 py-5">
              <div className="container py-md-5 py-4">
                <h3 className="title-style">We Provide Everthing</h3>
                <p className="sub-title">
                  Everthing is Available with our salon!
                </p>
                <div className="content-sec-11 mt-5">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="services-single d-flex p-sm-5 p-4">
                        <div className="service-icon mr-sm-4 mr-3">
                          <i className="fa fa-paint-brush" aria-hidden="true" />
                        </div>
                        <div className="services-content">
                          <h5><a href="services.html">Cosmetic Procedures</a></h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas
                            magna at
                            porttitor vehicula nullam augue ipsum dolor.</p>
                          <a href="#services" className="btn read-button d-flex align-items-center mt-4 p-0">Read
                            More<i className="fa fa-angle-double-right ml-1" aria-hidden="true" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="services-single d-flex p-sm-5 p-4">
                        <div className="service-icon mr-sm-4 mr-3">
                          <i className="fa fa-smile-o" aria-hidden="true" />
                        </div>
                        <div className="services-content">
                          <h5><a href="services.html">Facial Care</a></h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas
                            magna at
                            porttitor vehicula nullam augue ipsum dolor.</p>
                          <a href="#services" className="btn read-button d-flex align-items-center mt-4 p-0">Read
                            More<i className="fa fa-angle-double-right ml-1" aria-hidden="true" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="services-single d-flex p-sm-5 p-4 mb-lg-0">
                        <div className="service-icon mr-sm-4 mr-3">
                          <i className="fa fa-eye" aria-hidden="true" />
                        </div>
                        <div className="services-content">
                          <h5><a href="services.html">Paired Procedures</a></h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas
                            magna at
                            porttitor vehicula nullam augue ipsum dolor.</p>
                          <a href="#services" className="btn read-button d-flex align-items-center mt-4 p-0">Read
                            More<i className="fa fa-angle-double-right ml-1" aria-hidden="true" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="services-single d-flex p-sm-5 p-4 mb-0">
                        <div className="service-icon mr-sm-4 mr-3">
                          <i className="fa fa-leaf" aria-hidden="true" />
                        </div>
                        <div className="services-content">
                          <h5><a href="services.html">Medi-SPA &amp; Massage</a></h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas
                            magna at
                            porttitor vehicula nullam augue ipsum dolor.</p>
                          <a href="#services" className="btn read-button d-flex align-items-center mt-4 p-0">Read
                            More<i className="fa fa-angle-double-right ml-1" aria-hidden="true" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* //providing services section */}
          {/* blog section */}
          <div className="w3l-grids-block-5 py-5">
            <div className="container py-md-5 py-4">
              <h3 className="title-style">Our Latest Blog</h3>
              <p className="sub-title">Read our makeup, hairdressing and body treatments </p>
              <div className="row mt-5">
                <div className="col-lg-4 col-sm-6">
                  <div className="blog-card-single">
                    <div className="grids5-info">
                      <a href="#blog"><img src="website/assets/images/blog1.jpg" alt /></a>
                      <div className="blog-info">
                        <h5>November 3, 2020 - <a href="blog-single">New</a></h5>
                        <h4><a href="#blog">Donec sed teus enime</a></h4>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 mt-sm-0 mt-4">
                  <div className="blog-card-single">
                    <div className="grids5-info">
                      <a href="#blog"><img src="website/assets/images/blog3.jpg" alt /></a>
                      <div className="blog-info">
                        <h5>November 6, 2020 - <a href="blog-single">New</a></h5>
                        <h4><a href="#blog">It's enim ad minim aute</a></h4>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 mt-lg-0 mt-4">
                  <div className="blog-card-single">
                    <div className="grids5-info">
                      <a href="#blog"><img src="website/assets/images/blog2.jpg" alt /></a>
                      <div className="blog-info">
                        <h5>November 7, 2020 - <a href="blog-single">New</a></h5>
                        <h4><a href="#blog">Ullamco laboris nisi uts</a></h4>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-md-5 mt-4 text-center">
                <a className="btn btn-style mt-2" href="#blog">View More Blog</a>
              </div>
            </div>
          </div>
          {/* //blog section */}
          {/* testimonial section */}
          <div className="w3l-cutomer-main-cont">
            <div className="testimonials py-5">
              <div className="container py-md-5 py-4">
                <h3 className="title-style">Client's Say</h3>
                <p className="sub-title"> What our client's say about us</p>
                <div className="row content-sec mt-md-5 mt-4">
                  <div className="col-lg-4 col-md-6 testi-sections">
                    <div className="testimonials_grid">
                      <p className="sub-test"><q>
                        Nam libero tempore, cum soluta
                        nobis est eligendi optio cumque nihil impedit.</q>
                      </p>
                      <div className="d-grid sub-author-con">
                        <div className="testi-img-res">
                          <img src="website/assets/images/testi2.jpg" alt className="img-fluid" />
                        </div>
                        <div className="testi_grid text-left">
                          <h5>Petey Cruis</h5>
                          <p>Caption Here</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-md-0 mt-4 testi-sections">
                    <div className="testimonials_grid">
                      <p className="sub-test"><q>
                        Nam
                        libero
                        tempore, cum soluta
                        nobis est eligendi optio cumque nihil impedit.</q>
                      </p>
                      <div className="d-grid sub-author-con">
                        <div className="testi-img-res">
                          <img src="website/assets/images/testi1.jpg" alt className="img-fluid" />
                        </div>
                        <div className="testi_grid text-left">
                          <h5>Molive Joe</h5>
                          <p>Caption Here</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-lg-0 mt-4 testi-sections">
                    <div className="testimonials_grid">
                      <p className="sub-test"><q>
                        Nam
                        libero
                        tempore, cum soluta
                        nobis est eligendi optio cumque nihil impedit.</q>
                      </p>
                      <div className="d-grid sub-author-con">
                        <div className="testi-img-res">
                          <img src="website/assets/images/testi3.jpg" alt className="img-fluid" />
                        </div>
                        <div className="testi_grid text-left">
                          <h5>Paige Turner</h5>
                          <p>Caption Here</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //testimonial section */}

          <Footer />

        </div>
        {/* //right content */}
      </div>
      {/* Js scripts */}
      {/* move top */}
      <button onclick="topFunction()" id="movetop" title="Go to top">
        <span className="fa fa-level-up" aria-hidden="true" />
      </button>

      <Helmet>
        <script src="website/assets/js/jquery-3.3.1.min.js"></script>
      </Helmet>
    </div>

  )
}

export default Index