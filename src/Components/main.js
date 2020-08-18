import React, { Component } from 'react'
import About from './About'
import Header from './Header'

class Main  extends Component {
    render() {
        return (
           <div>
               <Header/>
          
            <div className='home-main-section'>
                <div className='image-wraper'>
                    <div className='my-image'></div>
                </div>
                <div className=' call-to-action'>
                    <h1 className='my-name'>Samuel W. Mwangi - Profile</h1>
                    <h2 className='title'> Web App Developer</h2>
                    <span className= 'subtitle'>Frontend and Backend developer who is focused on writting clean code </span>
                    <a href='#' className='btn'>Contacts</a>
                </div>
             
            </div>
         </div>
          
        )
    }
}
export default  Main
