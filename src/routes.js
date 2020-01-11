import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import { initializeFirebase} from './firebase'
import Dashboard from "./layouts/Dashboard/Dashboard.jsx";
import Login from "./layouts/login/login.jsx";

function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
    )
}


export default class App extends Component {
    state = {
        authed: false,
        loading: true,
    }
    componentDidMount() {
        var firebase = initializeFirebase();
        this.removeListener = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authed: true,
                    loading: false,
                })
            } else {
                this.setState({
                    authed: false,
                    loading: false
                })
            }
        })
    }
    componentWillUnmount() {
        this.removeListener()
    }
    render() {
        return this.state.loading === true ? <h1></h1> : (
            <BrowserRouter>
            <Switch>
                <Route authed={this.state.authed} path='/login' key="Login" component={Login} />
                <PrivateRoute authed={this.state.authed} path='/' key="Home" component={Dashboard} />
            </Switch>
            </BrowserRouter>
        );
    }
}