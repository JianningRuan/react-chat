import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import Nav from './../nav/Nav';
import { connect } from 'react-redux';
 import { Route, Switch } from 'react-router-dom';

import geniusList from './../geniusList/geniusList';
import bossList from './../bossList/bossList';
import message from './../message/message';
import center from './../center/center';

@connect(
    state=>state.user
)
class main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log('main:', this);
        const pathName = this.props.location.pathname;
        const navList = [
            {path: '/boss', title: '牛人列表', icon: 'genius-list', selectedIcon: 'genius-list-fill', component: geniusList, hide: this.props.type === 'genius'},
            {path: '/genius', title: 'BOSS列表', icon: 'boss-list', selectedIcon: 'boss-list-fill', component: bossList, hide: this.props.type === 'boss'},
            {path: '/msg', title: '信息列表', icon: 'message', selectedIcon: 'message-fill', component: message, hide: false},
            {path: '/user', title: '个人中心', icon: 'user-center', selectedIcon: 'user-center-fill', component: center, hide: false}
        ];
        return(
            <div>
                <NavBar mode='dark'>{navList.find(v=>v.path === pathName).title}</NavBar>
                <Switch>
                    {navList.map(v=>(
                        <Route key={v.path} path={v.path} component={v.component} />
                    ))}
                </Switch>
                <Nav navList={navList}/>
            </div>
        )
    }
}

export default main;