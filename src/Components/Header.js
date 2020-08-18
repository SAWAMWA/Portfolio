import React, { Component } from 'react'
import logo from './../assets/logo.png';
import Main from './main'

class Header extends Component {
    render() {
        return (
            <div className ='container'>
            <div className='header'>
                <a className='brand-logo'>
                 <img src={logo}/>
                 <div className=' brand-logo-name'>MyProfile</div>
                </a>
                <nav className='main-nav'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About me</a></li>
                        <li><a href='#'>Projects</a></li>
                        <li><a href='#'>Contacts</a></li>    
                    </ul>
                </nav> 
            </div>
                <section >
                  
                </section>
            </div>

        )
    }
}
export default Header