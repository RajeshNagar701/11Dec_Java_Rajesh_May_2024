import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

function About() {
  return (

    <div>
      <div className="main-content">
       <Header/>
        {/* right content */}
        <div className="right-content-section">
          {/* inner banner */}
          <div className="inner-banner">
            <section className="w3l-breadcrumb">
              <div className="container">
                <h4 className="inner-text-title font-weight-bold text-white mb-2">About Us</h4>
                <ul className="breadcrumbs-custom-path">
                  <li><a href="index.html">Home</a></li>
                  <li className="active"><span className="fa fa-chevron-right mx-2" aria-hidden="true" />About Us
                  </li>
                </ul>
              </div>
            </section>
          </div>
          {/* //inner banner */}
          {/* about section */}
          <section className="w3l-text-6 py-5" id="about">
            <div className="text-6-mian py-md-4 py-3">
              <div className="container">
                <div className="row top-cont-grid align-items-center">
                  <div className="col-lg-6 left-img pr-lg-4">
                    <img src="assets/images/about.jpg" alt className="img-responsive img-fluid" />
                  </div>
                  <div className="col-lg-6 text-6-info mt-lg-0 mt-4">
                    <h3 className="title-style">About Us</h3>
                    <p className="sub-title">Welcome to our Beauty Spot</p>
                    <p className="mt-4">Aenean pulvinar pharetra pellentesque. Cras dignissim, sapien ac tempus
                      bibendum,
                      eros massa
                      fermentum
                      massa, in eleifend ipsum quam vel magna.Maecenas viverra, leo eget semper ultrices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* //about section */}
          {/* team section */}
          <section className="w3l-team py-5">
            <div className="container py-md-5 py-4">
              <h3 className="title-style">Our Lovely Team</h3>
              <p className="sub-title">Meet our lovely team</p>
              <div className="row text-center mt-5">
                <div className="col-md-4">
                  <div className="team-block-single">
                    <div className="team-grids">
                      <a href="#team-single">
                        <img src="assets/images/team1.jpg" className="img-fluid" alt />
                      </a><div className="team-info"><a href="#team-single">
                      </a><div className="social-icons-section"><a href="#team-single">
                      </a><a className="fac" href="#facebook">
                            <span className="fa fa-facebook" />
                          </a>
                          <a className="twitter mx-2" href="#twitter">
                            <span className="fa fa-twitter" />
                          </a>
                          <a className="google" href="#google-plus">
                            <span className="fa fa-google-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="team-bottom-block p-4">
                      <h5 className="member"><a href="#team">Olive Yew</a></h5>
                      <small>Makeup Specialist</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-md-0 mt-5">
                  <div className="team-block-single active">
                    <div className="team-grids active">
                      <a href="#team-single">
                        <img src="assets/images/team2.jpg" className="img-fluid" alt />
                      </a><div className="team-info"><a href="#team-single">
                      </a><div className="social-icons-section"><a href="#team-single">
                      </a><a className="fac" href="#facebook">
                            <span className="fa fa-facebook" />
                          </a>
                          <a className="twitter mx-2" href="#twitter">
                            <span className="fa fa-twitter" />
                          </a>
                          <a className="google" href="#google-plus">
                            <span className="fa fa-google-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="team-bottom-block p-4">
                      <h5 className="member active"><a href="#team">Aida Joe</a></h5>
                      <small>Hair Designer</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-md-0 mt-5">
                  <div className="team-block-single">
                    <div className="team-grids">
                      <a href="#team-single">
                        <img src="assets/images/team3.jpg" className="img-fluid" alt />
                      </a><div className="team-info"><a href="#team-single">
                      </a><div className="social-icons-section"><a href="#team-single">
                      </a><a className="fac" href="#facebook">
                            <span className="fa fa-facebook" />
                          </a>
                          <a className="twitter mx-2" href="#twitter">
                            <span className="fa fa-twitter" />
                          </a>
                          <a className="google" href="#google-plus">
                            <span className="fa fa-google-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="team-bottom-block p-4">
                      <h5 className="member"><a href="#team">Teri Dac</a></h5>
                      <small>Makeup Specialist</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* //team setion */}
          {/* about block 3 */}
          <section className="about-block-3 py-5">
            <div className="grids-w3ovt py-md-5 py-4">
              <div className="container">
                <h3 className="title-style">Why Choose Us?</h3>
                <p className="sub-title">The best services for you</p>
                <div className="row mt-5">
                  <div className="col-md-4 mb-md-0 mb-5">
                    <div className="bg-color-block-2">
                      <h6 className="top-grid-text text-uppercase"><label>01.</label>Our Values</h6>
                      <h3 className="grid-one-text mb-3">Title Goes Here</h3>
                      <p>Donec interdum magna ac libero mattis porta. Nulla in mauris aliquam convallis.
                        Mauris
                        vitae ante nec augue.</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-md-0 mb-5">
                    <div className="bg-color-block-2">
                      <h6 className="top-grid-text text-uppercase"><label>02.</label>Who We Are</h6>
                      <h3 className="grid-one-text mb-3">Title Goes Here </h3>
                      <p>Donec interdum magna ac libero mattis porta. Nulla in mauris aliquam convallis.
                        Mauris
                        vitae ante nec augue.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bg-color-block-2">
                      <h6 className="top-grid-text text-uppercase"><label>03.</label>What We Do</h6>
                      <h3 className="grid-one-text mb-3">Title Goes Here</h3>
                      <p>Donec interdum magna ac libero mattis porta. Nulla in mauris aliquam convallis.
                        Mauris
                        vitae ante nec augue.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* //about block 3 */}
          {/* stats */}
          <section className="w3_stats py-5" id="stats">
            <div className="container py-md-5 py-4">
              <div className="w3-stats text-center">
                <div className="row">
                  <div className="col-md-4 col-6">
                    <div className="counter">
                      <span className="fa fa-coffee" />
                      <div className="timer count-title count-number mt-3" data-to={1286} data-speed={1500}>
                      </div>
                      <p className="count-text">Cup's of Coffee</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="counter">
                      <span className="fa fa-smile-o" />
                      <div className="timer count-title count-number mt-3" data-to={16300} data-speed={1500}>
                      </div>
                      <p className="count-text">Happy Client's</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 mt-md-0 mt-5">
                    <div className="counter">
                      <span className="fa fa-trophy" />
                      <div className="timer count-title count-number mt-3" data-to={10630} data-speed={1500}>
                      </div>
                      <p className="count-text">Award's Won</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* //stats */}
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

export default About