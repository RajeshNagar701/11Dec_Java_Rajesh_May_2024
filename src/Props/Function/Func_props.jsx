
/*
React Props

Props are arguments passed into React components.

Props are passed to components via HTML attributes.
React Props are like function arguments in JavaScript and attributes in HTML.

To send props into a component, use the same syntax as HTML attributes

//declare props/argument
Func_props({img,title,desc}) {

}

//call function/component and with aegument values

<Func_props img="https://via.placeholder.com/600/24f355" title="PQR" desc="PQR Product"/>

*/


import React from 'react'

function Func_props({img,title,desc}) {
    return (
        <div className='col-md-4'>
            <div className="card" style={{ width: '100%' }}>
                <img className="card-img-top" src={img} alt="Card image" style={{ width: '100%' }} />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{desc}r</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>
        </div>

    )
}

export default Func_props