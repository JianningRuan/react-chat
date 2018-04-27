import React, { Component } from 'react';
import { WingBlank, Button, WhiteSpace, NavBar, List, InputItem, Toast } from 'antd-mobile';
import * as server from './../../api/server';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: ''
        }
    }
    onChangeUser(val){
        this.setState({
            user: val
        })
    }
    onChangePassword(val){
        this.setState({
            password: val
        })
    }
    onClickSubmit(){
        if (this.state.user === '' || this.state.password === ''){
            Toast.info('账号或密码不能为空');
            return null
        }
        server.login({
            user: this.state.user,
            password: this.state.password
        }).then((res)=>{
            console.log(res);
            if (res.data.code === 1){
                // 记录登录
                // 跳转
            }else {
                // 弹窗提示失败
                Toast.fail('登录失败');
            }
        })
    }
    render(){
        return (
            <div className="flex flex-c">
                <NavBar>登录页</NavBar>
                <WhiteSpace/>
                <div className="flex1">
                    <List>
                        <InputItem clear placeholder="请输入账号" maxLength={12} value={this.state.user} onChange={this.onChangeUser.bind(this)}>用户</InputItem>
                        <InputItem type="password" clear placeholder="请输入密码" maxLength={16} value={this.state.password} onChange={this.onChangePassword.bind(this)}>密码</InputItem>
                    </List>
                </div>
                <WhiteSpace/>
                <WingBlank>
                    <Button type="primary" onClick={this.onClickSubmit.bind(this)}>登 录</Button>
                    <WhiteSpace/>
                    <Button>注 册</Button>
                    <WhiteSpace/>
                </WingBlank>
            </div>
        )
    }
}

export default Login;