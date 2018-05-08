import React, { Component } from 'react';
import { WingBlank, Button, WhiteSpace, NavBar, List, InputItem, Toast } from 'antd-mobile';
import * as server from './../../api/server';
import { connect } from 'react-redux';
import { loginFinish } from './../../store/user';

@connect(
    state=>state.user,
    { loginFinish }
)
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: ''
        };
        this.onClickSubmit = this.onClickSubmit.bind(this);
        this.goRegister = this.goRegister.bind(this);
    }
    handleChange(key, val){
        this.setState({
            [key]: val
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
                this.props.loginFinish(res.data.data);
                console.log('login:', this.props);
                // 跳转
                this.props.history.push('/fillData');
            }else {
                // 弹窗提示失败
                Toast.fail(res.data.errMsg);
            }
        })
    }
    goRegister(){
        this.props.history.push('/register');
    }
    render(){
        return (
            <div className="flex flex-c">
                <NavBar>登录页</NavBar>
                <WhiteSpace/>
                <div className="flex1">
                    <List>
                        <InputItem clear placeholder="请输入账号" maxLength={12} value={this.state.user} onChange={(v)=>this.handleChange('user', v)}>用户</InputItem>
                        <InputItem type="password" clear placeholder="请输入密码" maxLength={16} value={this.state.password} onChange={(v)=>this.handleChange('password', v)}>密码</InputItem>
                    </List>
                </div>
                <WhiteSpace/>
                <WingBlank>
                    <Button type="primary" onClick={this.onClickSubmit}>登 录</Button>
                    <WhiteSpace/>
                    <Button onClick={this.goRegister}>注 册</Button>
                    <WhiteSpace/>
                </WingBlank>
            </div>
        )
    }
}

export default Login;