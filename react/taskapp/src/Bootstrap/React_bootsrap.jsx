/*
React Bootstrap
The most popular front-end framework, rebuilt for React.

The best way to consume React-Bootstrap is via the npm package which you can 
install with npm (or yarn if you prefer).


https://react-bootstrap.netlify.app/docs/getting-started/introduction/ 

Instalation 

npm install react-bootstrap bootstrap


Importing Components

import Button from 'react-bootstrap/Button';

// or less ideally
import { Button } from 'react-bootstrap';


Why React-Bootstrap?

React-Bootstrap is a complete re-implementation of the Bootstrap components using React. 
It has no dependency on either bootstrap.js or jQuery. If you have React setup and 
React-Bootstrap installed, you have everything you need.

simple bootsrap works on real dom
react component works on Virtual dom


*/


import React from 'react'
import Button from 'react-bootstrap/Button';


import {
    Table, Alert, Accordion, Badge, Breadcrumb, ButtonGroup, Card, Carousel
    , Dropdown, Figure, ListGroup, Modal, Navbar, Nav, Container, NavDropdown,
    Form, FormControl, Row, Col
} from 'react-bootstrap';


function React_bootsrap() {
    return (
        <div>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>

            <hr />
            {
                [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark',
                ].map((value, index, entarr) => {
                    return (
                        <Alert variant={value}>
                            This is a primary alert—check it out!
                        </Alert>
                    )
                })
            }

            <hr />

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_190f27b9dd4%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_190f27b9dd4%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <hr />
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            <hr />

            <Row>
                <Col className='bg-danger' sm={8} md={6}>sm=8 md=6 </Col>
                <Col className='bg-primary' sm={4} md={6}>sm=4 md=6</Col>
            </Row>
            <Row>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
            </Row>

        </div >
    )
}

export default React_bootsrap