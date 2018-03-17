import React, { Component } from 'react';


class SignIn extends Component {
	render () {
		return (

			<div className="modal fade" id="signinModal" tabindex="-1" role="dialog" aria-labelledby="signinModalLabel">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title" id="signinModalLabel">Sign In!</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  
                </div>
                <div className="modal-body">

                  <div className="form-group">
                     <label htmlFor="usr">Email:</label>
                     <input type="text" className="form-control" id="usr"/> 
                  </div>

                  <div className="form-group">
                     <label htmlFor="usr">Password:</label>
                     <input type="text" className="form-control" id="usr"/> 
                  </div>

                  <p><a href="#" className="links" data-toggle="modal" data-target="#signupModal" data-dismiss="modal">Not a member yet? Sign Up here!</a></p>
                  <button type="button" className="btn btn-primary" id="submitmodal" data-dismiss="modal">Submit</button>
                
                </div>
                {/* <div className="modal-footer">
                  {/* <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> */}
                  {/* <button type="button" class="btn btn-primary" data-dismiss="modal">Submit</button>
                </div> */} 
              </div>
            </div>
          </div>
		)
	}
};


export default SignIn;

