import React from 'react'
import { Helmet } from 'react-helmet'
function Afooter() {
    return (
        <>
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
          </>

    )
}

export default Afooter