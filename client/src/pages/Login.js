import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { login, loginValidate } from "../utils/userapi";
import { useLoginContext } from '../utils/GlobalState';
import { ERROR, LOGIN } from "../utils/actions"
import LoginForm from "../components/user/LoginForm/index"
import './Login.css';

//import validate from "../components/user/LoginForm/validate"

function Login(callback) {
    const [state, dispatch] = useLoginContext();
    const history = useHistory();

    const loginEmailRef = useRef();
    const loginPasswordRef = useRef();

    let errors = {
        emailError: "",
        passwordError: ""
    }

    let emailValue = ""
    let passwordValue = ""

    const validate = (emailValue, passwordValue) => {
        //console.log("validating")
        console.log(emailValue)
        console.log(passwordValue)
        if (emailValue.length === 0) {
            errors.emailError = ('Email required');
          }
       
          if (passwordValue.length === 0) {
            errors.passwordError = ('Password is required');
          } else if (passwordValue.length < 6) {
            errors.passwordError = ('Password needs to be 6 characters or more');
          }
          //console.log(errors)
          return errors;  
    }

    const handleLogin = (event) => {
        event.preventDefault()

        emailValue = loginEmailRef.current.value
        passwordValue = loginPasswordRef.current.value

        validate(emailValue, passwordValue);
        //console.log(errors.emailError)
        //console.log(errors.passwordError)
        //console.log(errors.length)

        //if (errors.emailError.length === 0 && errors.passwordError.length === 0){
            console.log("there are no errors")
            login({
                email: emailValue,
                password: passwordValue
            })
                .then(response => {
                    dispatch({
                        type: LOGIN,
                        user: response.data
                    });
    
                    history.push("/trips");
                })
                .catch(error => {
                    dispatch({
                        type: ERROR
                    })
                })
            
        // } else {
        //      console.log(errors)
        // }
        //setIsSubmitting(true)      
    }

    return (
        <div  className="picture">
        <div className="form-container">
        <div className="row px-4">

            <div className="content">
                {state.user.user_id ? <h1>You are logged in!</h1> : <h1>You're not logged in!</h1>}
                <div className="col-md-6">
                    <h2>Login</h2>
                    <LoginForm
                        loginEmailRef={loginEmailRef}
                        loginPasswordRef={loginPasswordRef}
                        handleLogin={handleLogin}
                    />
                </div>
                {/* //{!errors ? <p></p>: <h4></h4> } */}
                <h4>Don't have an account? <a href="/signup">Sign Up Now!</a></h4>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Login;