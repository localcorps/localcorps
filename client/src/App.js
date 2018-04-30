import React, { Component } from 'react';
import logo from './img/localcorpslogo1.png';
import './App.css';

{/* import our components */}

import About from './About.js' //eslint-disable-line import/first
import SignIn from './SignIn.js'; //eslint-disable-line import/first
import SignUp from './SignUp.js'; //eslint-disable-line import/first

class App extends Component {
  render() {
    return (
      <div className="App" id="home">
        <nav className="App-nav">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li><a href="#contact">Contact</a></li>
            {/* <li><a href="#" data-toggle="modal" data-target="#signinModal">Sign In</a></li>  */}
            {/* <li><a href="#about">About</a></li>
            <li><a href="#home">Home</a></li> */}
          </ul>
        </nav>
        
        <header className="App-header">

          <div className="overlay">
          <p className="App-intro">Connect. Report. Reach Out.</p>
          </div>
          
          

          {/* sign up modal */}
          {/* <button type="button" className="btn btn-primary openModal signUp" data-toggle="modal" data-target="#signupModal">
              Sign Up
          </button>
          <button type="button" className="btn btn-primary openModal" data-toggle="modal" data-target="#signupModal">
              Sign In
          </button> */}
          
          {/* <SignUp /> */}

          {/* sign in modal */}
          {/* <SignIn /> */}

        </header>
   
        <br/>

        <About />

        <div className="App-contact" id="contact">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h2>Contact</h2>
              </div>
              <div className="col-lg-12">
                <p>For more information about Local Corps please send an email to: </p>
                   <p><a href="mailto:localcorps@gmail.com">localcorps@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="App-footer">
          <p>&copy; 2018 Local Corps</p>
        </div>
        
      </div>


    );
  }

}



export default App;
