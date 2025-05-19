import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Page/Home'
import Category from '../Page/Category'
import About from '../Page/About'
import Details from '../Page/Details'
import Nopage from '../Page/Nopage'
import { Col, Container, Form, InputGroup, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { LuSearch } from "react-icons/lu";


function Header() {
    return (
        <>
            <header>
                <Container>
                    <Row>
                        <Col lg={2}>
                            <Link to="/">
                                <img src="https://kitabyatra.com/storage/app/public/company/2023-08-18-64df09044615f.png" className='w-100' alt="" />
                            </Link>
                        </Col>
                        <Col lg={7} className='offset-lg-3'>
                            <InputGroup className="mb-3">
                                <Form.Control className='p-3'
                                    placeholder="Enter Products.."
                                    aria-label="Enter Products.."
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2"><LuSearch /> Search</InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </header>
            <Navbar expand="lg" className="bg-dark navbar-dark">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/category/:categoryid' element={<Category />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/details/:productId' element={<Details />}></Route>
                <Route path='*' element={<Nopage />}></Route>


            </Routes>
        </>
    )
}

export default Header
