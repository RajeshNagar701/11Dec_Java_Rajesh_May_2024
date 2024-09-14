/*

Sass stands for Syntactically Awesome Stylesheet
Sass is an extension to CSS
Sass is a CSS pre-processorSass is completely compatible with all 
versions of CSS
Sass reduces repetition of CSS and therefore saves time
Sass was designed by Hampton Catlin and developed by Natalie Weizenbaum in 2006
Sass is free to download and use

npm i sass

Create a Sass file
Create a Sass file the same way as you create CSS files, but Sass files have the file extension .scss

mycss.scss

*/


import React from 'react'

import './mycss.scss'

function Sass_css() {
  return (
    <div>
        <div className='box'>
            <h1>Sass</h1>
        </div>

        <hr />

        <nav className='nav1'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
            </ul>
        </nav>

        <hr />

        <h1 className='myfont'>Hello i am font</h1>
        <h1 className='mytext'>Hello i am text</h1>

        <hr />

        <button className='btn'>BASIC</button>
        <button className='red'>RED</button>
        <button className='blue'>BLUE</button>
        <button className='pink'>PINK</button>
        <button className='green'>GREEN</button>
        <button className='yellow'>YELLOW</button>

    </div>
  )
}

export default Sass_css