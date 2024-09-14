import React from 'react'

function Footer() {
  return (

    <>
      <section className="companies-20 py-5">
        <div className="container py-md-5 py-4">
          <h3 className="title-style">Our Brand's</h3>
          <p className="sub-title">We use only the high quality original products</p>
          <div className="companies20-content mt-5 pt-lg-4">
            <div className="companies-wrapper">
              <div className="owl-carousel owl-theme">
                <div className="item">
                  <a href="#link"><img src="assets/images/brand1.jpg" alt /></a>
                </div>
                <div className="item">
                  <a href="#link"><img src="assets/images/brand2.jpg" alt /></a>
                </div>
                <div className="item">
                  <a href="#link"><img src="assets/images/brand3.jpg" alt /></a>
                </div>
                <div className="item">
                  <a href="#link"><img src="assets/images/brand4.jpg" alt /></a>
                </div>
                <div className="item">
                  <a href="#link"><img src="assets/images/brand5.jpg" alt /></a>
                </div>
                <div className="item">
                  <a href="#link"><img src="assets/images/brand6.jpg" alt /></a>
                </div>
                <div className="item">
                  <a href="#link"><img src="assets/images/brand7.jpg" alt /></a>
                </div>
                <div className="item">
                  <a href="#link"><img src="assets/images/brand8.jpg" alt /></a>
                </div>
                <div className="item">
                  <a href="#link"><img src="assets/images/brand4.jpg" alt /></a>
                </div>
                <div className="item">
                  <a href="#link"><img src="assets/images/brand5.jpg" alt /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //brands section */}
      {/* footer */}
      <div className="footer-w3ls">
        <div className="footer-dot">
          <div className="container py-md-4 py-3">
            <div className="contact-center">
              <div className="footer-logo pt-2 mb-sm-5 mb-3 text-center">
                <h2>
                  <a href="index.html">
                    <i className="fa fa-snowflake-o mr-2" aria-hidden="true" />Beauty Spot
                  </a>
                </h2>
                <p className="px-lg-5 mt-4 text-white">Itaque earum rerum hic tenetur asaItaque
                  earum rerum
                  hic tenetur asap iente delectus rulla accumsan ac elit in
                  coeiciendis maiores alias consequatur auectus rulla accumsan arullat maiores alias
                  consequatur auectus
                  rullat.</p>
              </div>
              <div className="row border-top">
                <div className="col-lg-6 col-md-4 footer-grid">
                  <div className="justify-content-center contact-g2 mx-auto">
                    <h6 className="footer-wthree">Follow us</h6>
                    <div className="address-grid">
                      <ul className="social-icons3">
                        <li>
                          <a href="#facebook" className="s-iconfacebook">
                            <span className="fa fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#twitter" className="s-icontwitter">
                            <span className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#dribbble" className="s-icondribbble">
                            <span className="fa fa-dribbble" />
                          </a>
                        </li>
                        <li>
                          <a href="#instagram" className="s-iconinstagram">
                            <span className="fa fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-8 border-left footer-grid">
                  <div className="subscribe-grid">
                    <h6 className="footer-wthree">Signup to our newsletter</h6>
                    <form action="#" method="post" className="form-inline">
                      <input type="email" placeholder="Your Email" name="Subscribe" required />
                      <button className="btn1">
                        <i className="fa fa-paper-plane" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* copyright */}
          <div className="cpy-right text-center py-4 mt-4">
            <p className="text-white">© 2020 Beauty Spot. All rights reserved | Design by
              <a href="http://w3layouts.com" className="text-white"> W3layouts.</a>
            </p>
          </div>
          {/* //copyright */}
        </div>
      </div>
    </>

  )
}

export default Footer