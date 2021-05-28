import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LOGOUT } from '../utils/actions';
import { logout } from "../utils/userapi";
import { useLoginContext } from '../utils/GlobalState';

function LoginOrLogoutButton() {

    const [state, dispatch] = useLoginContext();
    const history = useHistory();

    const handleLogOut = (event) => {
        event.preventDefault();
        logout()
            .then(response => {
                dispatch({
                    type: LOGOUT
                });

                history.push("/login");
            })

    }

    return (
        <>
            {state.user.user_id
                ? <Link className="nav-links" to="#" onClick={handleLogOut}>Log out!</Link>
                : <Link className="nav-links" to="/login">Log In!</Link>
            }
        </>
    )
}

export default LoginOrLogoutButton;