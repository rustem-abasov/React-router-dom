import './Header.css'

import React from 'react'
import { Container, Row, Col, Nav, Button } from 'react-bootstrap'
import Logo from '../../assets/react.svg'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <Container fluid='md'>
                <Row>
                    <Col className='logo-box' sm={2}>
                        <Link to='/'>
                            <img src={Logo} alt="logo" className='logo' />
                        </Link>

                    </Col>

                    <Col className='nav-box' sm={8}>

                        <Container>

                            <Nav className="me-auto nav-box">
                                <NavLink className='nav-item' to='/'>Home</NavLink>
                                <NavLink className='nav-item' to='/about'>About</NavLink>
                                <NavLink className='nav-item' to='/contact'>Contact</NavLink>
                                <NavLink className='nav-item' to='/posts'>Posts</NavLink>
                            </Nav>
                        </Container>
                    </Col>
                    <Col className='nav-box' sm={2}>
                        <Button variant="success" href='/contact' >Success</Button>

                    </Col>
                </Row>
            </Container>
        </header >
    )
}


export default Header