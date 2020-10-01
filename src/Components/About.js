import React, { Component } from 'react'
import { HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter as Router  } from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Button, Row, Col} from 'react-bootstrap'

 class About extends Component {
    render() {
        return (
    <Router>
        <div className='main' id='section1' >
        <Row>
            <Col>
                <div className='about'> 
                    <h1 style={{color:' rgb(226, 8, 179)'}}><u>About</u> Me</h1>
                </div>
            </Col>
        </Row>
    <Container className="justify-content-xl-center"  >
    <Row xs={1} md={2} >
                        <Col className='about-col'>
                            <h3><u><strong>Small story about me</strong></u></h3>
                            <p>
                                I always love designing and creating solutions to problems using tech 
                                and so Tech is a passion of mine. I enjoy nothing more than learning the trends the technology is taking
                                and also developing a solution that work.
                            </p>
                            <p>
                                I spend most of my time looking for various ways 
                                of solving problems and new innovation using technology. I am the kind of person who 
                                believes in possibilities, not impossibilities and also a person who keeps a cool head 
                                even in a very stressful situation. finally, I always wanted to work in an environment 
                                where I can innovate and find my own solutions to challenge.
                            </p>
                        
                        </Col>
                        <Col className='about-col' >  
                            <u><strong>Top skills</strong></u>
                            <ul className='skills'>
                          
                                <li> Solving I.T. related Software and Hardware issues </li>
                                <li>Conducts training on basic usage of Computer </li>
                                <li>Networking </li>
                                <li>User Support </li>
                                
                             </ul>
                             <h2 className='text-left' style={{color:' rgb(226, 8, 179)'}}><u><strong>Tech stack</strong></u></h2>
                             <ul className='skills'>
                                <li>HTML5 / CSS</li>
                                <li>Javascript / React</li>
                                <li>Python / Django</li>
                                <li>FIGMA</li>
                                <li>Bootstrap</li>
                        </ul>
                        </Col>
                    </Row>
    </Container>
        <em><hr></hr></em><br></br>
        </div>
        </Router>
        
        )
    }
}

export default About