import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { signup } from "../utils/userapi";
import { useLoginContext } from '../utils/GlobalState';
import { ERROR, LOGIN } from "../utils/actions"
import SignUpForm from "../components/user/SignUpForm"

function SignUp() {
    const [state, dispatch] = useLoginContext();
    const history = useHistory();

    const signupEmailRef = useRef();
    const signupPasswordRef = useRef();
    const usernameRef = useRef();

    const handleSignup = (event) => {
        event.preventDefault()
        signup({
            email: signupEmailRef.current.value,
            password: signupPasswordRef.current.value,
            username: usernameRef.current.value
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
                    ERROR
                })
            })
    }

    return (
        <div className="row px-3">
            {state.user.user_id ? <h1>You are logged in!</h1> : <h1>You're not logged in!</h1>}
            <div className="col-md-6">
                <h2>Signup</h2>
                <SignUpForm 
                    usernameRef={usernameRef}
                    signupEmailRef={signupEmailRef}
                    signupPasswordRef={signupPasswordRef}
                    handleSignup={handleSignup}
                />
            </div>
        </div>
    )
}

export default SignUp;
