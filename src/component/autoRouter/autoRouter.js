import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';  // 关联路由
import { connect } from 'react-redux';
import * as server from './../../api/server';


class AutoRouter extends Component{
    componentDidMount(){
        console.log('props', this.props);
        // 当前页面是哪个
        const pathList = ['/login', '/register'];
        let currentPath = this.props.location.pathname;
        if (pathList.indexOf(currentPath)  !== -1){
            return
        }
        server.getUserInfo().then((res)=>{
            console.log('aa', res);

            if (res.status === 200){
                // 是否已登录
                if (res.data.code === 0){
                    this.props.history.push('/login');
                    return null
                }
                // 角色是哪个
            }

            // 是否信息完善
        })
    }
    render(){
        return null
    }
}

export default withRouter(AutoRouter);