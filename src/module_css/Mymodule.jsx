/*
Another way of adding styles to your application is to use CSS Modules.
CSS Modules are convenient for components that are placed in separate files.
The CSS inside a module is available only for the component that imported it, 
and you do not have to worry about name conflicts.


Create the CSS module with the .module.css extension, example: my-style.module.css.


Import the stylesheet in your component:

import A from './my-style.module.css'; 

USE : <H1 class={A.classname}>HELLO</H1>
*/



import React from 'react'

// import './normal.css'   import normal css

import A from './my1.module.css'  // module.css import 


function Mymodule() {
  return (
    <div>
        <h1 className={A.module}>Hi i am Module 1</h1>
    </div>
  )
}

export default Mymodule