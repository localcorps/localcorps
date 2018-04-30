import React, { Component } from 'react'

 class About extends Component {
 	render() {
 		return( 
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
                <p>Local Corps was founded in 2016 in response to the tragic shootings that occurred at the Pulse nightclub in Orlando, FL. Our goal is to help neighborhoods bring a sense of safety back to their communities.</p>
                <p>Local Corps is a community alert application that turns the idea of the neighborhood watch into a real-time communication hub for nearby residents and local authorities. </p>
              </div>
              <div className="col-lg-5">
                {/* <h4>How to help</h4> */}
                <p>Local Corps is a new style of the neighborhood watch. Property managers and HOAs are in charge of their communities boards.  Residents are able to report the suspicious activity they see on the application and get an immediate response from the appropriate parties. </p>
                {/* <p>Local Corps gives all of us a chance to step up and step in! When your community is in need, it is a way we can all band together, no matter your skill level or experience. Are you skilled at first aid? Are you good with a hammer and nails? Can you pass out water bottles and snacks? Can you be a shoulder to cry on? This is where your city needs you!</p> */}
                {/* <h4>Receive Alerts First!</h4> */}
                <p>Local Corps members are volunteering to look out for each other, be aware of their surroundings, and reach out and notify when something isn't right.</p>
              </div>
            </div>
          </div>
        </div>
       )
 	}
}

 export default About
