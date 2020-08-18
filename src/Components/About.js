import React, { Component } from 'react'
import Header from './Header'

 class About extends Component {
    render() {
        return (
        <div>
            <Header/>
            <div className='about-header'>
                <h1>About me</h1>
             </div> 
            <div className ='about-main-section'>
              
                <div className= 'my-story'>
                    <h2>Small story about me</h2>
                    <span>I always love designing and creating solutions to problems using tech 
                        and so Tech is a passion of mine. I enjoy nothing more than learning the trends the technology is taking
                         and also developing a solution that work.
                    </span>
                </div>

                <div className='stack-skills'>
                    <h2>Tech stack</h2>
                    <h4>HTML5 / CSS   </h4>
                    <h4>Javascript / React</h4>
                    <h4> MYSQL</h4>
                    <h4>Python / Django</h4>
                    <h4>FIGMA</h4>

                </div>
            </div>

        </div>
        )
    }
}

export default About