/*

React components has a built-in state object.

The state object is where you store property values that belong to the component.

When the state object changes, the component re-renders.

Creating the state Object
The state object is initialized in the constructor:

constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }


<h1>My {this.state.brand}</h1>


To change a value in the state object, use the 
this.setState() method.

<button onClick={()=>this.setState({name: "Akash Nagar"})}>Change</button>

*/


import React, { Component } from 'react'
import Class_img from './Class_img';

export class Class_state extends Component {

    constructor() {
        super();
        this.state = {
          name:"Rajesh Nagar",
          number:1,
          isImage:true
        };
      }

  render() {
    return (
      <div>
        <h1>Class_state</h1>
        <hr />

        <button onClick={()=>this.setState({name: "Akash Nagar"})}>Change</button>
        <h1>Hi my name is : {this.state.name}</h1>

        <hr />

        <button onClick={()=>this.setState({number: this.state.number+1})}>+</button>
        <h1>{this.state.number}</h1>
        <button onClick={()=>this.setState({number: this.state.number-1})}>-</button>
        
        <hr />
        <button onClick={()=>this.setState({isImage: false})}>Hide</button>
        <button onClick={()=>this.setState({isImage: true})}>Show</button>
        <button onClick={()=>this.setState({isImage: !this.state.isImage})}>Toggle</button>
        {
            this.state.isImage?<Class_img/>:null
        }

      </div>
    )
  }
}

export default Class_state