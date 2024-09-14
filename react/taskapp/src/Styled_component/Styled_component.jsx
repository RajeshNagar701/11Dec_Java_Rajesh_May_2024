/*
https://styled-components.com/ 
https://styled-components.com/docs/basics  

styled-components is the result of wondering how we could enhance CSS for styling React component systems. By focusing on a single use case we managed to optimize the experience for developers as well as the output for end users.

Apart from the improved experience for developers, styled-components provides:

Automatic critical CSS
No class name bugs:
Easier deletion of CSS:
Simple dynamic styling:
Painless maintenance:

npm install --save styled-components

import styled from 'styled-components';

*/



import React from 'react'

import styled from 'styled-components';

function Styled_component() {


 const Head=styled.h1`
 color:red;
 background-color:pink;
 text-align:center;
 text-decoration:underline;
`;

const MyButton = styled.button`
    border:2px solid palevioletred;
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    background:none;
    color:palevioletred;
    display:block;
    margin:0 auto;
    &:hover{
            background : palevioletred;
            color:white;
    }
`
const Basic = styled.button`
font-weight:bolder;
border-radius:10px;
padding:10px 35px;
background:Gray;
color:white;
display:block;
margin:0 auto;`;

const BasicRed =styled(Basic)`
    background-color:red;
`;

const BasicGreen =styled(Basic)`
    background-color:green;
`;

const BasicYellow =styled(Basic)`
    background-color:yellow;
`;

const BasicOrange =styled(Basic)`
    background-color:orange;
`;

const BasicBlue =styled(Basic)`
    background-color:blue;
`;

const ButtonProps = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


  return (
    <div>
        <Head>
            <h1>Hello i am custome component</h1>
        </Head>
        <hr />
        <MyButton>Hello</MyButton>

        <hr />
        <Basic>Basic</Basic>
        <BasicRed>Red</BasicRed>
        <BasicBlue>Blue</BasicBlue>
        <BasicGreen>Green</BasicGreen>
        <BasicOrange>Orange</BasicOrange>
        <BasicYellow>Yellow</BasicYellow>

        <hr />

        <ButtonProps>ButtonProps</ButtonProps>
        <ButtonProps primary>ButtonProps</ButtonProps>
    </div>
  )
}

export default Styled_component