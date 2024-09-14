import React from 'react'
import Sidebar from '../Common/Sidebar'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Link } from 'react-router-dom'



function PNG() {
    return (
        <>
            <Header title="About Page" />
            <div className="container mt-5">
                <div className="row">
                    <Sidebar />
                    <div className="col-sm-8 text-center mt-5">
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                        <Link to="/" className='btn btn-primary'>Back</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PNG