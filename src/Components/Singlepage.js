import React from 'react'
import Main from './main'
import About from './About'
import Header from './Header'
import Contact from './Contact'
import Project from './Project'
import { BrowserRouter as Router,
    Route, 
    Switch, 
    Links, 
    Redirect} from 'react-router-dom'

 function Singlepage() {
    return (
        
            <div>
                <Header/>
                
                <Main></Main>
                <About/>
                <Project></Project>
                <Contact></Contact>
            </div>
        
    )
}

export default Singlepage

