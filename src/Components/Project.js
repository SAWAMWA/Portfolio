import React, { Component } from 'react'
import Header from './Header'

class Project extends Component {
    render() {
        return (
            <section className='project-section' id={'project'}>
                 <div className='project-header'> 
                    <u> <h1>PROJECTS</h1></u>
                </div>

                <div  className= 'project-main-section'>

                    <div>project 1</div>
                    <div>project 2</div>
                    <div>project 3</div>
                </div>
              
            </section>
        )
    }
}
export default Project
