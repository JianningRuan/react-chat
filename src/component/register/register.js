import React, { Component } from 'react';
import { NavBar, List, InputItem, Button, WhiteSpace, WingBlank, Icon, Radio } from 'antd-mobile';
const RadioItem = Radio.RadioItem;
class Register extends Component{
        constructor(props){
                super(props);
                this.state = {
                        type: 'genius'
                }
        }
        handleChange(key, val){
                this.setState({
                        [key]: val
                })
        }
    render(){

        return (
            <div>
                <NavBar icon={<Icon type="left"/>}>注册页</NavBar>
                <List>
                    <InputItem>账号</InputItem>
                    <InputItem>密码</InputItem>
                    <InputItem>确认密码</InputItem>
                </List>
                    <WhiteSpace/>
                    <List>
                            <RadioItem checked={this.state.type === 'genius'} onChange={()=>this.handleChange('type', 'genius')}>牛人</RadioItem>
                            <RadioItem checked={this.state.type === 'boss'} onChange={()=>this.handleChange('type', 'boss')}>BOSS</RadioItem>
                </List>
                    <WhiteSpace/>
                <WingBlank>
                    <Button type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register;
