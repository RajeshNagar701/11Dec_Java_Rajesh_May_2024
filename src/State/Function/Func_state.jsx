/*

React State

React components has a built-in state object.
The state object is where you store property values that belong to the component.
When the state object changes, the component re-renders.


React useState Hook (before 16 version state not work in func component))

The React useState Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application
Import useState
To use the useState Hook, we first need to import it into our component.

import { useState } from "react";

*/


import React, { useState } from 'react'
import Func_img from './Func_img';

function Func_state() {

 const [name,setName]=useState("Akash nagar");

 const [data,setData]=useState({
    number:1,
    isImage:true
 })

  return (
    <div>
        <h1>State in Function</h1>
        <hr />
        <button onClick={()=>setName("Nirav Nagar")}>Change</button>
        <h1>Hi my name is : {name}</h1>

        <hr />
        <button onClick={()=>setData({...data,number:data.number+1})}>+</button>
        <h1>{data.number}</h1>
        <button onClick={()=>setData({...data,number:data.number-1})}>-</button>


        <hr />
        <button onClick={()=>setData({...data,isImage:false})}>Hide</button>
        <button onClick={()=>setData({...data,isImage:true})}>Show</button>
        <button onClick={()=>setData({...data,isImage:!data.isImage})}>Toggle</button>
        {
            data.isImage?<Func_img/>:null
        }
    </div>
  )
}

export default Func_state