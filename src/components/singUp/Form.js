import React, { useState, useRef } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css';
import ValidateLogininfo from './ValidateLogininfo';
import LoginForm from './LoginForm'



const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const { handleSubmit }= LoginForm(
    ValidateLogininfo
  );



  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="form-container">
      <span className='close-btn'>×</span>
            <div className="form-content-left">

            <form onSubmit={handleSubmit} className='form' noValidateLogininfo>

                <h1>
         If you already have an account, Login here.
        </h1>
                    <div className="form-group">
                        <label className="email-login">Username:</label>
                        <input className="form-control" type="text" id="email-login" ref={loginEmailRef} />
                    </div>
                    <div className="form-group">
                        <label className="password-login">Password:</label>
                        <input className="form-control" type="password" id="password-login" ref={loginPasswordRef} />
                    </div>
                    
                    {/* <button onClick= {() => 
                    {history.push("/Account");      
                    }}
                    > */}
                  <button className='form-input-btn' type='submit'>
          login
        </button>
          
        {/* </button> */}
                </form>
        </div>
        
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
  );
};

export default Form;
