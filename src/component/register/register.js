import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar, List, InputItem, Button, WhiteSpace, WingBlank, Icon, Radio, Toast } from 'antd-mobile';
import * as server from './../../api/server';
import { loginFinish } from './../../store/user';
const RadioItem = Radio.RadioItem;

@connect(
    state=>state.user,
    { loginFinish }
)
class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            account: '',
            type: 'genius',
            password: '',
            repeatPassword: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(key, val){
        this.setState({
            [key]: val
        })
    }
    handleSubmit(){
        // 判空
        if (!this.state.account || !this.state.password || !this.state.repeatPassword){
            Toast.show('账号或密码不能为空');
            return null
        }
        // 判断密码是否一致
        if (this.state.password !== this.state.repeatPassword){
            Toast.show('两次输入的密码不一致');
            return null
        }
        // 提交注册
        let user = {
            user: this.state.account,
            password: this.state.password,
            type: this.state.type
        };
        console.log(user);
        server.register(user).then((res)=>{
            console.log(res);
            const data = res.data;
            if (data.code === 1){
                this.props.loginFinish(res.data.data);
                console.log(this);
                this.props.history.push(this.props.redirectTo);
            }else {
                Toast.show(data.errMsg);
            }
        });
    }
    render(){

        return (
            <div>
                <NavBar icon={<Icon type="left"/>}>注册页</NavBar>
                <List>
                    <InputItem clear placeholder="请输入账号" value={this.state.account} onChange={(v)=>this.handleChange('account', v)}>账号</InputItem>
                    <InputItem clear type="password" placeholder="请输入密码" value={this.state.password} onChange={(v)=>this.handleChange('password', v)}>密码</InputItem>
                    <InputItem clear type="password" placeholder="请再次输入密码" value={this.state.repeatPassword} onChange={(v)=>this.handleChange('repeatPassword', v)}>确认密码</InputItem>
                </List>
                <WhiteSpace/>
                <List>
                    <RadioItem checked={this.state.type === 'genius'} onChange={()=>this.handleChange('type', 'genius')}>牛人</RadioItem>
                    <RadioItem checked={this.state.type === 'boss'} onChange={()=>this.handleChange('type', 'boss')}>BOSS</RadioItem>
                </List>
                <WhiteSpace/>
                <WingBlank>
                    <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                </WingBlank>
                <WhiteSpace/>
            </div>
        )
    }
}

export default Register;
