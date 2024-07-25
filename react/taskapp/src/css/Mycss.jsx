import React from 'react'
import './external.css';

const mystyle={backgroundColor:"pink",color:"red"}

function Mycss() {
  return (
    <div>
        <h1 style={{backgroundColor:"red",color:"yellow"}}> Hello i am inline css</h1>
        <hr />
        <h1 style={mystyle}>Hi i am internal like store in variable</h1>
        <hr />
        <h1 className='myexter'>hi i am External css</h1>
    </div>
  )
}

export default Mycss