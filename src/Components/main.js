import React, { Component } from 'react'

import {Button} from 'react-bootstrap'
import samuel from './../assets/samuel.png';
import { HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter as Router  } from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'

class Main  extends Component {
    render() {
        return (
        
          <Router>
            
            <Container >
          
            <Row  className="justify-content-md-center  " xs={1} sm={2} md={2} id={'main'}>
           
          
           
                <Col className='m-auto' md={4}> 
                    <img src={samuel} className='d-block mx-auto img-fluid w-50'  alt='SAM' style={{}}/>
                </Col>
                <Col className='m-auto col-xs-1 text-center' md={8} >
                     <div className='details'>
                        <h2>Samuel W. Mwangi</h2>
                        <h3 className='title'> Web App Developer</h3>
                        <p className= 'subtitle'>Frontend and Backend developer who is focused on writting clean code </p><br></br>
                        <Link to='/About/#section1' className='btn'><Button>More</Button></Link>
                    </div>
                </Col>
               
            </Row>
            
            </Container>
             <hr></hr>
            </Router>
        
          
        )
    }
}
export default  Main
