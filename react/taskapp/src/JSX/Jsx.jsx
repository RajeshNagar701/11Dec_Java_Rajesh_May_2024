
/*

What is JSX?
JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.

JSX allows us to write HTML elements in JavaScript and place them in the DOM without 
any createElement()  and/or appendChild() methods.

SX converts HTML tags into react elements.

You are not required to use JSX, but JSX makes it easier to write React applications.

With JSX you can write expressions inside curly braces { }.

*/


import React from 'react'

import './compStyle.css';


function Jsx() {

  var name="Rajesh nagar"; 
  const myelement = <h1>I Love JSX!</h1>; 
  const myelement1 = <h1>React is {5 + 5} times better with JSX</h1>;
  
  const myelement2 = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );

  const mystyle={color: 'pink', backgroundColor: 'blue'}
  
  return (
    <div>
        <h1>Hello i am jsx</h1>
        <h1>{name}</h1>
        <h1>{5+5}</h1>
        <hr />
        <h1>{myelement}</h1>
        <h1>{myelement1}</h1>
        <h1>{myelement2}</h1>
        <hr />
        <h1 style={{color: 'red', backgroundColor: 'yellow'}}>Hello i am Inline css</h1>
        <h1 style={mystyle}>Hello i am Inline css</h1>
        
        <hr />

        <h1 className='box'>Hello i am External css</h1>

        <h1 class='box'>Hello i am External css</h1>
    </div>
  )
}

export default Jsx