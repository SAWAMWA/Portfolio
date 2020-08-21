import React, { Component } from 'react'
import logo from './../assets/logo.png';
import Main from './main'

import { HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter as Router,
    Route, 
    Switch, 
    Redirect} from 'react-router-dom' 

class Header extends Component {
    render() {
        return (
            <Router>
            <div className ='container'>
            <div className='header'>
                <a className='brand-logo'>
                 <div className=' brand-logo-name'>SAMUEL</div>
                </a>
                <nav className='main-nav'>
                    <ul>
                        <li><Link to='/Main/#main'>Home</Link></li>
                        <li><Link  to= '/About/#section1'>About me</Link></li>
                        <li><Link to='/Project/#project'>Projects</Link></li>
                        <li><Link to='Contact/#contact'>Contacts</Link></li>    
                    </ul>
                </nav> 
            </div>
                
            </div>
         </Router>
        )
    }
}
export default Header