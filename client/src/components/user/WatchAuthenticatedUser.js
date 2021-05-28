import React, { useEffect } from 'react';
import { useLoginContext } from '../../utils/GlobalState';
import { authenticatedUser } from "../../utils/userapi";
import { LOGIN } from '../../utils/actions';

function WatchAuthenticatedUser() {
    const [state, dispatch] = useLoginContext();
    // don't try to delete "state,". IT WILL BREAK

    useEffect(() => {
        authenticatedUser()
            .then(response => {
                if (response.data) {
                    dispatch({
                        type: LOGIN,
                        user: response.data
                    });
                }
            })
    }, [])

    return <></>;
}

export default WatchAuthenticatedUser;