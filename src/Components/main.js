import React, { Component } from 'react'


import samuel from './../assets/samuel.png';
import { HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter as Router  } from 'react-router-dom' 


class Main  extends Component {
    render() {
        return (
        
          <Router>
              
            <div className='home-main-section' id={'main'}>
                <div className='image-wraper'>
                    
                <img src={samuel} alt='SAM'/>

                </div>
                <div className=' call-to-action'>
                    <h3 className='my-name'>Samuel W. Mwangi</h3>
                    <h3 className='title'> Web App Developer</h3>
                    <span className= 'subtitle'>Frontend and Backend developer who is focused on writting clean code </span>
                    <Link to='Contact/#contact' className='btn'>Contacts</Link>
                 
                </div>
             
            </div>
            </Router>
        
          
        )
    }
}
export default  Main
