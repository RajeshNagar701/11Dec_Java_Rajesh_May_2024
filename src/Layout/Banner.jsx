import React from 'react'

function Banner() {
    return (
        <div>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                {/* Indicators/dots */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
                </div>
                {/* The slideshow/carousel */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="Los Angeles" className="d-block" style={{ width: '100%' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.w3schools.com/bootstrap5/chicago.jpg" alt="Chicago" className="d-block" style={{ width: '100%' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.w3schools.com/bootstrap5/ny.jpg" alt="New York" className="d-block" style={{ width: '100%' }} />
                    </div>
                </div>
                {/* Left and right controls/icons */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon" />
                </button>
            </div>
        </div>

    )
}

export default Banner