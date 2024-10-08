import React from 'react'
import Sidebar from '../Common/Sidebar'
import Header from '../Common/Header'
import Banner from '../Common/Banner'
import Footer from '../Common/Footer'

function Home() {
  return (
    <>
    <Header title="Home Page"/>
    <Banner/>
    <div className="container mt-5">
      <div className="row">
        <Sidebar/>
        <div className="col-sm-8">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Dec 7, 2020</h5>
          <div className="fakeimg">Fake Image</div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <h2 className="mt-5">TITLE HEADING</h2>
          <h5>Title description, Sep 2, 2020</h5>
          <div className="fakeimg">Fake Image</div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home