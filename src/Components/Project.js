import React, { Component } from 'react'

import { HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter as Router  } from 'react-router-dom' 
import covid from './../assets/covid.jpg'
import farmedge from './../assets/farmedge.jpg' 
import logo from './../assets/logo.png' 
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col,  Nav, Button} from 'react-bootstrap'

class Project extends Component {
    render() {
        return (
            <Router>
            <Container >
            <Row className="justify-content-xl-center"  xs={1} sm={1} md={1} id={'project'}>
                 <div className=' text-center '> 
                    <Col><u> <h1 style={{color:' rgb(226, 8, 179)'}}>Projects</h1></u></Col> 
                </div>

                <Row className= "justify-content-x-center" xs={1} sm={3} md={3}>
               
                    <Col>
                        <Nav>
                            <Nav.Link href='https://farmers-edge.netlify.app/'>
                                <img src={farmedge}  className='d-block mx-auto img-fluid w-50'  alt='FarmEdge'  />
                                <p>A solution that is designed to assist farmers to market
                                     and sell their produde. it link farmers to consumer</p>
                            </Nav.Link>
                        </Nav> 
                    </Col>
                    <Col>
                        <Nav>
                            <Nav.Link href=' https://sawamwa.github.io/Covid-estimator/'>
                                <img src={covid} className='d-block mx-auto img-fluid w-50'  alt='Covid-Estimator' />
                                <p>This is a solution aimed to assist the government in preparedness to fight Covid-19 pandemic  </p>
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                    <Nav>
                            <Nav.Link href=' #'>
                                <img src={logo.png} className='d-block mx-auto img-fluid w-50'  alt='Profile'  />
                                <p>My portfolio</p>
                                <p>Under Construction</p>
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Link to='Contact/#contact' className='btn'><Button>Contacts</Button></Link>
              </Row> 
              
            </Row>
         </Container>
         <hr></hr><br></br>
         </Router>
        )
    }
}
export default Project
