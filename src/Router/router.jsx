import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from '../components/home';
import Dashboard from '../components/dashboard';

class Router extends Component {
    render() {
        return (
                <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                </div>
                </BrowserRouter>
        );
    }
}

export default Router;