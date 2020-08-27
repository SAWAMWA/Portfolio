import React, { Component } from 'react'

//import { HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter as Router  } from 'react-router-dom' 
import covid from './../assets/covid.jpg'
import farmedge from './../assets/farmedge.jpg' 
import logo from './../assets/logo.png' 
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Card,  Nav, Button} from 'react-bootstrap'

class Project extends Component {
    render() {
        return (
            <Router>
            <Container >
            <Row className="justify-content-xs-center"  xs={1} sm={1} md={1} id={'project'}> 
            <       div className=' text-center '> 
                    <Col><u> <h1 style={{color:' rgb(226, 8, 179)'}}>Projects</h1></u></Col> 
                </div>

                <Row className= "justify-content-xs-center" xs={1} sm={3} md={3}>
                <Col style={{}}>
                <Card style={ {width:'18rem', marginLeft:'auto', marginRight:'auto'}}>
                    <Card.Img variant ='top' top width='100%' height='auto' src={farmedge}></Card.Img>
                    <Card.Body>
                        <Card.Title style={{color:'#3e3636'}}>Farmer Edge</Card.Title>
                        <Card.Text style={{color:'#3e3636', fontSize:'2vw'}}>
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
                <Card style={ {width:'18rem', marginLeft:'auto', marginRight:'auto'}}>
                    <Card.Img variant ='top' src={covid}></Card.Img>
                    <Card.Body>
                        <Card.Title style={{color:'#3e3636'}}>Covid-19 Estimator</Card.Title>
                        <Card.Text style={{color:'#3e3636', fontSize:'2vw'}}  >
                        This is a solution aimed to assist the government in preparedness
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
                <Card style={ {width:'18rem', marginLeft:'auto', marginRight:'auto'}}>
                    <Card.Img variant ='top' src={logo.png}></Card.Img>
                    <Card.Body>
                        <Card.Title style={{color:'#3e3636'}} >My Portfolio</Card.Title>
                        <Card.Text style={{color:'#3e3636'}}>
                        Under Construction
                        </Card.Text>
                        <Nav>
                            <Nav.Link href=' #'>
                                <Button variant='primary'>Explore More...</Button>
                            </Nav.Link>
                        </Nav>
                    </Card.Body>
                </Card>
                </Col>
                </Row> 
                </Row>
            </Container>
         </Router>
        )
    }
}
export default Project
