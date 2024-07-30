import React from 'react'
import Func_props from './Function/Func_props'
import Class_props from './Class/Class_props'

function Props_main() {
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='m-5'>Props In Function Component</h1>
                <Func_props img="https://via.placeholder.com/600/92c952" title="ABC" desc="ABC Product" />
                <Func_props img="https://via.placeholder.com/600/771796" title="XYZ" desc="XYZ Product" />
                <Func_props img="https://via.placeholder.com/600/24f355" title="PQR" desc="PQR Product" />

                <h1 className='m-5'>Props In Class Component</h1>

                <Class_props img="https://via.placeholder.com/600/92c952" title="ABC" desc="ABC Product" />
                <Class_props img="https://via.placeholder.com/600/771796" title="XYZ" desc="XYZ Product" />
                <Class_props img="https://via.placeholder.com/600/24f355" title="PQR" desc="PQR Product" />
            </div>
        </div>
    )
}

export default Props_main