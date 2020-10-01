import React, { Component } from 'react'

//import { HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter as Router  } from 'react-router-dom' 
import covid from './../assets/covid.jpg'
import farmedge from './../assets/farmedge.jpg' 
//import profile from './../assets/profile.jpg' 
import allto from './../assets/allto.jpg' 
import mazao from './../assets/mazao.jpg' 
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Card,  Nav, Button} from 'react-bootstrap'

class Project extends Component {
    render() {
        return (
            <Router>
                 <Row>
                    <Col>
                        <div className='about'> 
                            <h1 style={{color:' rgb(226, 8, 179)'}}><u>Projects Portfolio</u></h1>
                        </div>
                    </Col>
                </Row>
            <Container  >
            <Row className="justify-content-x-center"  xs={1} sm={1} md={1} id={'project'}>

                <Row className= "justify-content-xs-center" xs={1} sm={3} md={4}>
                <Col style={{}}>
                <Card style={ {width:'14rem', marginLeft:'auto', marginRight:'auto'}}>
                    <Card.Img variant ='top' top width='100%' height='auto' src={farmedge}></Card.Img>
                    <Card.Body>
                        <Card.Title style={{color:'#3e3636'}}>Farmer Edge</Card.Title>
                        <Card.Text style={{color:'#3e3636'}}>
                            A solution that is designed to assist farmers to market
                            and sell their produde. it link farmers to consumer
                        </Card.Text>
                        <Nav>
                            <Nav.Link href='https://farmers-edge.netlify.app/'>
                                <Button variant='primary'>Explore More...</Button>
                            </Nav.Link>
                        </Nav>
                    </Card.Body>
                </Card>
                </Col>
                
                <Col>
                <Card style={ {width:'14rem', marginLeft:'auto', marginRight:'auto'}}>
                    <Card.Img variant ='top' src={covid}></Card.Img>
                    <Card.Body>
                        <Card.Title style={{color:'#3e3636'}}>Covid-19 Estimator</Card.Title>
                        <Card.Text style={{color:'#3e3636'}}  >
                        This is a solution aimed to assist in preparedness
                         to fight Covid-19 pandemic
                        </Card.Text>
                        <Nav>
                            <Nav.Link href=' https://sawamwa.github.io/Covid-estimator/'>
                                <Button variant='primary'>Explore More...</Button>
                            </Nav.Link>
                        </Nav>
                    </Card.Body>
                </Card>
                </Col>
           
                <Col>
                <Card style={ {width:'14rem', marginLeft:'auto', marginRight:'auto'}}>
                    <Card.Img variant ='top' src={allto}></Card.Img>
                    <Card.Body>
                        <Card.Title style={{color:'#3e3636'}} > Allto Construction Company ltd </Card.Title>
                        <Card.Text style={{color:'#3e3636'}}>
                       Allto Construction Company ltd Website
                        </Card.Text>
                        <Nav>
                            <Nav.Link href=' https://allto.netlify.app/'>
                                <Button variant='primary'>Explore More...</Button>
                            </Nav.Link>
                        </Nav>
                    </Card.Body>
                </Card>
                </Col>
         
                <Col>
                <Card style={ {width:'14rem', marginLeft:'auto', marginRight:'auto'}}>
                    <Card.Img variant ='top' src={mazao}></Card.Img>
                    <Card.Body>
                        <Card.Title style={{color:'#3e3636'}} >Mazao direct Web APP</Card.Title>
                        <Card.Text style={{color:'#3e3636'}}>
                        Under Construction
                        </Card.Text>
                        <Nav>
                            <Nav.Link href=' https://mazao-direct.netlify.app/'>
                                <Button variant='primary'>Explore More...</Button>
                            </Nav.Link>
                        </Nav>
                    </Card.Body>
                </Card>
                </Col>
                </Row> 
                </Row>
            </Container>
            <hr></hr>
         </Router>
        )
    }
}
export default Project
