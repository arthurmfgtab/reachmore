import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import { isAuthenticated } from './services/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: '/', state: { from: props.location } }}
                />
            )
        }
    />
)

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Landing} />
            <PrivateRoute exact path='/home' component={Home} />
        </Switch>
    </BrowserRouter>
)
