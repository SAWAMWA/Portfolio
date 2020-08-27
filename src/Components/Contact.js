import React, { Component } from 'react'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form, Container, Row, Col } from 'react-bootstrap'

 class Contact extends Component {
    render() {
        return (
            <Container>
            <Row className="justify-content-xx-center"  xs={1} sm={1} md={1} id ={'contact'}>
              
               <div className='m-auto text-center '> 
                    <Col> <h1 style={{color:' rgb(226, 8, 179)'}}><u>Contact</u> Me</h1></Col> 
                </div>
           <Row xs={1} sm={2} md={2}>

               <Col className='m-auto text-center' md={6} style={{fontSize:'2vw'}}>
                   <div style={ {width:'18rem', marginLeft:'auto', marginRight:'auto' , color:'blue'}}><label>Contact Information:</label></div> 
                 <div style={ {marginLeft:'auto', marginRight:'auto', color:'blue'}}> 
                   <h4 style={{fontSize:'2vw'}} >P.O Box 2 10213 Murang'a</h4>
                   <p>Phone: +254725347787</p>
                   <p>Email: smlmwangi@gmail.com</p>
                   <p>Website:https://samuelmwangi.netlify.app/ </p>
                </div> 
               </Col>
               
               <Col className='m-auto' md={6}>
                   
                   <Form className='m-auto'  md={12} >
                   <Row xs={1} md={2} >
                         <Col className ='' md={12}>
                               <Form.Group  controlId='FormcontrolInput'>
                                    <Form.Label>First Name:</Form.Label>
                                    <Form.Control type='text' placeholder='First Name'></Form.Control>
                                </Form.Group>
                                <Form.Group   controlId='FormcontrolInput'>
                                    <Form.Label>Last Name:</Form.Label>
                                    <Form.Control type='text' placeholder='Last Name'></Form.Control>
                                </Form.Group> 

                                <Form.Group  controlId='FormBasicEmail'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='email' placeholder='Email'></Form.Control>
                                </Form.Group> 
                            </Col>

                            <Col className='wid' fluid md={12}>
                                    <Form.Group   controlId='exampleForm.ControlTextArea'>
                                        <Form.Label>Message:</Form.Label>
                                        <Form.Control as='textarea' rows ='3'  ></Form.Control>
                                    </Form.Group> 
                                    <Button className='m-auto'>Send Message</Button>
                            </Col>
                        </Row>
                 </Form> 
                </Col>
            </Row>
            <Footer/>
            </Row>
            
            </Container>   
        )
    }

 }
 export default Contact