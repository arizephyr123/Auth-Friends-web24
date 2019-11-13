import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//  PrivateRoute Rules:
// 1. It has the same API (appliation programming interface- interfacing with API through props) as <Route/> => must take in the same 3 default props (match, location, hx) as route
// 2. It renders a <Route/> and passes all props through it
// 3. It checksif the user is authenticated, if they are it renders the component, if not it redirects to login

const PrivateRoute = ({ component: Component, ...rest}) => {
    // console.log("Component", Component);
    // console.log("component", component);
    // console.log("rest", rest);
    return(
        <Route {...rest} render={() => {
            if (sessionStorage.getItem('token')){
                //if token in session storage, render the given component
                return <Component />
            } else {
                return <Redirect to='/login/'/>
            }
        }}/>
    )

};

export default PrivateRoute;