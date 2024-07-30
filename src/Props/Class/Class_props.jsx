/*

Props
Another way of handling component properties is by using props.

Props are like function arguments, and you send them into the component as attributes.

Props in the Constructor

If your component has a constructor function, the props should always be passed to 
the constructor and also to the React.Component via the super() method.

constructor(props) {
    super(props);
  }


  {this.props.model}

*/

import React, { Component } from 'react'

export class Class_props extends Component {

    constructor(props) {
        super(props);
      }

    render() {
        return (
            <div className='col-md-4'>
                <div className="card" style={{ width: '100%' }}>
                    <img className="card-img-top" src={this.props.img} alt="Card image" style={{ width: '100%' }} />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">{this.props.desc}</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Class_props