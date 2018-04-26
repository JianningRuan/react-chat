import React, { Component } from 'react';
import { WingBlank, Button, WhiteSpace, NavBar, List, InputItem } from 'antd-mobile';
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: ''
        }
    }
    render(){
        return (
            <div className="flex flex-c">
                <NavBar>登录页</NavBar>
                <div className="flex1">
                    <List>
                        <InputItem clear placeholder="请输入账号" maxLength={12}>用户</InputItem>
                        <InputItem type="password" clear placeholder="请输入密码" maxLength={16}>密码</InputItem>
                    </List>
                </div>
                <WhiteSpace/>
                <WingBlank>
                    <Button type="primary">登 录</Button>
                    <WhiteSpace/>
                    <Button>注 册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login;