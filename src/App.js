import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import AutoRouter from './component/autoRouter/autoRouter';
import Login from './component/login/login';
import Register from './component/register/register';

import bossInfo from './component/bossInfo/bossInfo';
import geniusInfo from './component/geniusInfo/geniusInfo'

import main from './component/main/main';

import chat from './component/chat/chat';

class App extends Component {
    render() {
        console.log('app:', this);
        return (
            <div className="App">
                <AutoRouter/>
                <Switch>
                    <Route path='/geniusInfo' component={geniusInfo} />
                    <Route path='/bossInfo' component={bossInfo} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/chat/:id' component={chat} />
                    <Route component={main} />
                </Switch>
            </div>
        );
    }
}

export default App;
