import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';  // 关联路由
import axios from 'axios';
import * as url from './../../api/urlApi';

class AutoRouter extends Component{
    componentDidMount(){
        console.log('props', this.props);

        axios.get(url.userInfo).then((res)=>{
            console.log(res);
            // 当前页面是哪个
            // 是否已登录
            // 角色是哪个
            // 是否信息完善
        })
    }
    render(){
        return (
            <div></div>
        )
    }
}

export default withRouter(AutoRouter);