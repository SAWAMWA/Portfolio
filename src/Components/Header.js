import React, { Component } from 'react'



import { HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter as Router} from 'react-router-dom' 

class Header extends Component {
    render() {
        return (
            <Router>
            <div className ='container'>
            <div className='header'>
                <button className='brand-logo'>
                 <div className=' brand-logo-name'>SAMUEL</div>
                </button>
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