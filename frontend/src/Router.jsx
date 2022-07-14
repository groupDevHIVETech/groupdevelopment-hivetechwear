import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import SignIn from './containers/SignIn';
import Cart from './containers/Cart';
import Details from './containers/Details';
import SignUp from './containers/SignUp';
import ThankYou from './containers/ThankYou';


const Router = () => {
    return (
        <>
            <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/signin'} component={SignIn} />
            <Route exact path={'/cart'} component={Cart} />
            <Route exact path={'/details'} component={Details} />
            <Route exact path={'/signup'} component={SignUp} />
            <Route exact path={'/thankyou'} component={ThankYou} />
            </Switch>
        </>
    );
};
export default Router;
