import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { VetRouter } from './VetRouter';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    
    const dispatch = useDispatch();
    const { auth } = useSelector( state => state.login );

    // const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState( false );

    useEffect(() => {
        
        // TODO: CALL API REST FOR JSW ACTIVE
        if( auth?.username ) {

            console.log('entro');
            // dispatch( login( auth.centro, auth.username, auth.password ));
            setIsLoggedIn( true );

        } else {
            setIsLoggedIn( false );
        }

        // setChecking( false );

    }, [ dispatch, setIsLoggedIn, auth] );

    return (
        <Router>

            <div>
                <Switch>
                    
                    <PublicRoute 
                        path="/auth" 
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />

                    <VetRouter
                        exact
                        isAuthenticated={ isLoggedIn }
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    ) 
}
