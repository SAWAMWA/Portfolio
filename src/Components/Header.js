import React, { Component } from 'react'
import { HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter as Router} from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, Container, Button} from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
           
            <Router>
                 <Container >
                <Navbar bg="success"  >
                    <Navbar.Brand style={{color:' rgb(226, 8, 179)'}} as ={Link} to='/Main/#main'> <strong><u>SAMUEL</u></strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav  className= "justify-content-end"  style={{width:'100%'}}>
                            <Nav.Link as={Link} to= '/Main/#main'><Button className='primary'>Home</Button></Nav.Link>
                            <Nav.Link as={Link} to='/About/#section1'><Button className='primary'>About me</Button></Nav.Link>
                            <Nav.Link as={Link} to='/Project/#project'><Button className='primary'>Project </Button></Nav.Link>
                            <Nav.Link as={Link} to='Contact/#contact'><Button className='primary'>Contacts</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <nav className='main-nav'>
                        
                    </nav> 
            </Navbar>
            </Container>
         </Router>
         
        )
    }
}
export default Header