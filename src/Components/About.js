import React, { Component } from 'react'


 class About extends Component {
    render() {
        return (
        <section className=' about-me-section' id='section1'>
            
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

                <div className='main-stack-skills'>
                    <h2>Tech stack</h2>
                    <div className='stack-skills'>
                        <ul className='skills'>
                            <li>HTML5 / CSS</li>
                            <li>Javascript / React</li>
                            <li>MYSQL</li>
                            <li>Python / Django</li>
                            <li>FIGMA</li>
                        </ul>
                    </div>  
                        
                </div>
            </div>

        </section>
        )
    }
}

export default About