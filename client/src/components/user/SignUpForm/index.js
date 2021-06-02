import React from "react";

function SignUpForm(props) {
  return (
    <form className="form signup-form">
        <div className="form-group">
            <label htmlFor="name-signup">name:</label>
            <input className="form-control" type="text" id="name-signup" ref={props.usernameRef} />
        </div>
        <div className="form-group">
            <label htmlFor="email-signup">email:</label>
            <input className="form-control" type="text" id="email-signup" ref={props.signupEmailRef} />
        </div>
        <div className="form-group">
            <label htmlFor="password-signup">password:</label>
            <input className="form-control" type="password" id="password-signup" ref={props.signupPasswordRef} />
        </div>
        <div className="form-group">
            <button className="btn-prim" type="submit" onClick={props.handleSignup}>Signup</button>
        </div>
    </form>                                   
  );
}

export default SignUpForm;