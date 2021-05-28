import React from "react";

function LoginForm(props, callback, validate) {
  return (
    <form className="form login-form">
        <div className="form-group">
            <label htmlFor="email-login">email:</label>
            <input className="form-control" type="text" id="email-login" ref={props.loginEmailRef} />
        </div>
        <div className="form-group">
            <label htmlFor="password-login">password:</label>
            <input className="form-control" type="password" id="password-login" ref={props.loginPasswordRef} />
        </div>
        <div className="form-group">
            <button className="btn btn-primary" type="submit" onClick={props.handleLogin}>login</button>
        </div>
    </form>                                         
  );
}

export default LoginForm;