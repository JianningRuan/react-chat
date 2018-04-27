import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import AutoRouter from './component/autoRouter/autoRouter';
import Login from './component/login/login';
import Register from './component/register/register';
console.log(Register);

class App extends Component {
    render() {
        return (
            <div className="App">
                <AutoRouter/>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                </Switch>
            </div>
        );
    }
}

export default App;
