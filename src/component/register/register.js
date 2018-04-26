import React, { Component } from 'react';
import { NavBar, List, InputItem, Button, WhiteSpace, WingBlank, Icon, Radio } from 'antd-mobile';
const RadioItem = Radio.RadioTitem;
class Register extends Component{
    render(){
        const job = [
            {value: 0, label: '牛人'},
            {value: 1, label: 'BOSS'}
        ];
        return (
            <div>
                <NavBar icon={<Icon type="left"/>}>注册页</NavBar>
                <List>
                    <InputItem>账号</InputItem>
                    <InputItem>密码</InputItem>
                    <InputItem>确认密码</InputItem>
                </List>
                <List>
                    <RadioItem/>
                    <RadioItem/>
                </List>
                <WingBlank>
                    <Button>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register;
