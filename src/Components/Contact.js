import React, { Component } from 'react'
import Footer from './Footer'

 class Contact extends Component {
    render() {
        return (
            <section className=' contact-me-section' id ={'contact'}>
              
               <div className='contact-header'> 
               <u> <h1>CONTACT ME</h1></u>
                </div>
           <div className='contact'>
               <div className='adress-sec'>
                   <h4>P.O Box 2 Gikoe Muranga</h4>
                   <p>Phone: 0725347787</p>
                   <p>Email: smlmwangi@gmail.com</p>
               </div>
               
               <div  className= 'form'>
                   <div><label>Contact Information:</label></div>

                   <div className='form-class'>
                        <form>
                            <div className ='form-sec-1'>
                                <label id='fname'>First Name:</label><br></br>
                                <input type= 'text' id='fname'/><br></br>

                                <label id='Lname'>Last Name:</label><br></br>
                                <input type= 'text' id='Lname'/><br></br>

                                <label id='email'>Email:</label><br></br>

                                <input type= 'text' id='email'/><br></br>
                            </div>

                            <div className='form-sec-2'>
                                <label for = 'text'>Message:</label><br></br>
                                <textarea id='text' placeholder='Message'></textarea> <br></br>

                                <button className='btn'>Send</button>
                            </div>
                        </form>
                    </div>  
                </div>


            </div>


            <Footer/>
            </section>
        )
    }

 }
 export default Contact