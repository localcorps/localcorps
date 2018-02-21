import React, { Component } from 'react';
import logo from './img/badgelogo4.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="home">
        <nav className="App-nav">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Local Corps</h1>
          <ul>
            {/* <li><a href="#" data-toggle="modal" data-target="#signinModal">Sign In</a></li> */}
            <li><a href="#contact">Contact</a></li>
            {/* <li><a href="#about">About</a></li> */}
            {/* <li><a href="#home">Home</a></li> */} 
          </ul>
        </nav>
        
        <header className="App-header">

          
            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#signupModal">
              Sign Up
            </button> */}
          <div className="overlay">
          <p className="App-intro"> Volunteer Today, Support Tomorrow! </p>
          </div>
          

          {/* sign up modal */}
          <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="signupModalLabel">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title" id="signupModalLabel">Sign up to become a volunteer today!</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  
                </div>
                <div class="modal-body">

                  <div className="form-group">
                     <label for="usr">Name:</label>
                     <input type="text" class="form-control" id="usr"/> 
                  </div>

                  <div className="form-group">
                     <label for="usr">Email:</label>
                     <input type="text" class="form-control" id="usr"/> 
                  </div>

                  <div className="form-group">
                     <label for="usr">Password:</label>
                     <input type="text" class="form-control" id="usr"/> 
                  </div>

                  <p><a href="#" className="links" data-toggle="modal" data-target="#signinModal" data-dismiss="modal">Already a member? Login here!</a></p>
                  <button type="button" class="btn btn-primary" id="submitmodal" data-dismiss="modal">Submit</button>

                </div>
                {/* <div className="modal-footer">
                  {/* <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> */}
                  {/* <button type="button" class="btn btn-primary" data-dismiss="modal">Submit</button>
                </div> */} 
              </div>
            </div>
          </div>

          {/* sign in modal */}
          <div class="modal fade" id="signinModal" tabindex="-1" role="dialog" aria-labelledby="signinModalLabel">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title" id="signinModalLabel">Sign In!</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  
                </div>
                <div class="modal-body">

                  <div className="form-group">
                     <label for="usr">Email:</label>
                     <input type="text" class="form-control" id="usr"/> 
                  </div>

                  <div className="form-group">
                     <label for="usr">Password:</label>
                     <input type="text" class="form-control" id="usr"/> 
                  </div>

                  <p><a href="#" className="links" data-toggle="modal" data-target="#signupModal" data-dismiss="modal">Not a member yet? Sign Up here!</a></p>
                  <button type="button" class="btn btn-primary" id="submitmodal" data-dismiss="modal">Submit</button>
                
                </div>
                {/* <div className="modal-footer">
                  {/* <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> */}
                  {/* <button type="button" class="btn btn-primary" data-dismiss="modal">Submit</button>
                </div> */} 
              </div>
            </div>
          </div>
        </header>

        
        <br/>
        <br/>

        <div className="App-about" id="about">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10">
                <h2>What is Local Corps?</h2>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5">  
                {/* <h4>What is Local Corps?</h4> */}
                <p>Local Corps was founded in 2016 in response to the tragic shootings that occurred at the Pulse nightclub in Orlando, FL. Our goal is to help cities mobilize response teams and volunteers in quicker, more efficient ways by being prepared before disaster strikes. Help us, help you. Join the team Today!</p>
                <p>Local Corps gives all of us a chance to step up and step in! When your community is in need, it is a way we can all band together, no matter your skill level or experience. Are you skilled at first aid? Are you good with a hammer and nails? Can you pass out water bottles and snacks? Can you be a shoulder to cry on? This is where your city needs you!</p>
              </div>
              <div className="col-lg-5">
                {/* <h4>How to help</h4> */}
                <p>How can we help the victims today, the families tomorrow and how can we assist with tragedies in the future? We don't know if it's ever really possible to feel prepared for an attack or a devastating natural disaster but this allows for some type of preparation for our local city governments to be able to get information our and have some type of organization for all those who really want to lend a hand.</p>
                {/* <h4>Receive Alerts First!</h4> */}
                <p>Get up to the minute emergency alerts and notifications of volunteer opportunities when and where your city needs you most!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="App-contact" id="contact">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h2>Contact</h2>
              </div>
              <div className="col-lg-12">
                <p>For more information about Local Corps please send an email to <a href="mailto:localcorps@gmail.com">localcorps@gmail.com</a></p>
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
