import React, { Component } from 'react'
import { HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter as Router  } from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Button, Row, Col} from 'react-bootstrap'

 class About extends Component {
    render() {
        return (
    <Router>
    <Container  >
        <Row className="justify-content-xl-center" xs={1} sm={1} md={1} id='section1'>
            
                <div className='m-auto text-center '> 
                    <Col> <h1 style={{color:' rgb(226, 8, 179)'}}><u>About</u> Me</h1></Col> 
                </div>

            <Row className= "justify-content-sm-center" xs={1} sm={1} md={2} >
              
                <Col className=' text-left' style={{marginLeft:'auto'}}  xs={12} md={8}>
                    <h2 className='text-center' style={{color:' rgb(226, 8, 179)'}}><u><strong>Small story about me</strong></u></h2>
                    <p style={{fontSize:'2vw', marginLeft:'auto'}}>I always love designing and creating solutions to problems using tech 
                        and so Tech is a passion of mine. I enjoy nothing more than learning the trends the technology is taking
                         and also developing a solution that work.
                    </p>
                    <p style={{fontSize:'2vw'}}> 
                    I spend most of my time looking for various ways 
                    of solving problems and new innovation using technology. I am the kind of person who 
                    believes in possibilities, not impossibilities and also a person who keeps a cool head 
                    even in a very stressful situation. finally, I always wanted to work in an environment 
                    where I can innovate and find my own solutions to challenge.
                    </p>
                    <h2 className='text-center' style={{color:' rgb(226, 8, 179)'}}><u><strong>Top skills</strong></u></h2>
                    <ul className='skills' style={{fontSize:'2vw'}} >
                          
                                <li> Solving I.T. related Software and Hardware issues </li>
                                <li>Conducts training on basic usage of Computer </li>
                                <li>Networking </li>
                                <li>User Support </li>
                                
                     </ul>
                   
                    
                    
               
                   
                </Col>

                <Col className=' text-left' md={4}  >
                    
                    <h2 className='text-left' style={{color:' rgb(226, 8, 179)'}}><u><strong>Tech stack</strong></u></h2>
                    <div className='stack-skills'>
                        <Row>
                        <ul className='skills' style={{fontSize:'2vw'}} >
                            <Col>
                                <li>HTML5 / CSS</li>
                                <li>Javascript / React</li>
                                <li>MYSQL</li>
                            </Col>
                            <Col>
                                <li>Python / Django</li>
                                <li>FIGMA</li>
                                <li>Bootstrap</li>
                            </Col>
                        </ul>
                        </Row>
                    </div>  
                        
                </Col>

            </Row>
          <Link to='/Project/#project' className='btn'><Button>Projects</Button></Link>
        </Row>
      
        </Container>
        <em><hr></hr></em><br></br>
        </Router>
        
        )
    }
}

export default About