import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import AutoRouter from './component/autoRouter/autoRouter';
import Login from './component/login/login';
import Register from './component/register/register';

import bossInfo from './component/bossInfo/bossInfo';
import geniusInfo from './component/geniusInfo/geniusInfo'

import main from './component/main/main';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AutoRouter/>
                <Switch>
                    <Route path='/geniusInfo' component={geniusInfo} />
                    <Route path='/bossInfo' component={bossInfo} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route component={main} />
                </Switch>
            </div>
        );
    }
}

export default App;
