import React from "react";
import './style.css';


function LoginForm(props, callback, validate) {
  return (
    <div className="login-form">
        <div className="form-group">
            <label htmlFor="email-login">email:</label>
            <input className="form-control" type="text" id="email-login" ref={props.loginEmailRef} />
        </div>
        <div className="form-group">
            <label htmlFor="password-login">password:</label>
            <input className="form-control" type="password" id="password-login" ref={props.loginPasswordRef} />
        </div>
        <div className="form-group">
            <button className="btn-prim" type="submit" onClick={props.handleLogin}>Login</button>
        </div>
    </div>      
  );
}

export default LoginForm;