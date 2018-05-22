import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import Nav from './../nav/Nav';
import { connect } from 'react-redux';
 import { Route, Switch, Redirect } from 'react-router-dom';

import geniusList from './../geniusList/geniusList';
import bossList from './../bossList/bossList';
import message from './../message/message';
import center from './../center/center';
import { getChatList, recvMsg } from './../../store/chat';
@connect(
    state=>state,
    {getChatList, recvMsg}
)
class main extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        if (!this.props.chat.chatMsg.length) {
            this.props.getChatList();
            this.props.recvMsg(); // 监听
        }
    }
    render(){
        const pathName = this.props.location.pathname;
        const navList = [
            {path: '/boss', title: '牛人列表', icon: 'genius-list', selectedIcon: 'genius-list-fill', component: geniusList, hide: this.props.user.type === 'genius'},
            {path: '/genius', title: 'BOSS列表', icon: 'boss-list', selectedIcon: 'boss-list-fill', component: bossList, hide: this.props.user.type === 'boss'},
            {path: '/msg', title: '信息列表', icon: 'message', selectedIcon: 'message-fill', component: message, hide: false},
            {path: '/user', title: '个人中心', icon: 'user-center', selectedIcon: 'user-center-fill', component: center, hide: false}
        ];
        return(
            <div>
                {pathName !== '/'? (
                    <NavBar mode='dark'>{navList.find(v=>v.path === pathName).title}</NavBar>
                ): null}
                <Switch>
                    {navList.map(v=>(
                        <Route key={v.path} path={v.path} component={v.component} />
                    ))}
                    <Route exact path='/' render={()=><Redirect to={this.props.user.redirectTo}/>}/>
                </Switch>
                <Nav navList={navList}/>
            </div>
        )
    }
}

export default main;  /* <Route exact path='/' render={()=><Redirect to={this.props.user.}/>}/> */