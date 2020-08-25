import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter as Router  } from 'react-router-dom' 
import {Navbar, Nav} from 'react-bootstrap'
 function Footer() {
    return (
        <Router>
        <Navbar bg="success" expand='lg'>
                <Navbar.Brand style={{color:'#ffff'}} >
                    <small>@SamuelMwangi 2020 |</small>
                    <Link to='/Main/#main' className='btn'><span>Home</span></Link> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

          
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className= "justify-content-end"  style={{width:'100%'}} >
                  <Nav.Link style={{color:'#ffff'}} href ='https://web.facebook.com/samuel.w.mwangi/'>Facebook</Nav.Link>
                  <Nav.Link style={{color:'#ffff'}} href ='https://www.linkedin.com/in/samuel-w-mwangi-63676a38/'>Linkend</Nav.Link>
                  <Nav.Link style={{color:'#ffff'}} href ='https://github.com/SAWAMWA/'>Github</Nav.Link>
                </Nav>
             </Navbar.Collapse>
       </Navbar>
       </Router>
    )
}
export default Footer

