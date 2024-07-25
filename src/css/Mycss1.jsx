
/*

when we make different css for diff class then 
Problem occured

class name conflict
so wanred : don't take same name class name
override class


*/

import React from 'react'
import './external1.css';
function Mycss1() {
  return (
    <div>
        <h1 className='myexter'>Hi i am Mycss1</h1>
    </div>
  )
}

export default Mycss1