import React, { Component } from 'react';
import io from 'socket.io-client';
import { List, InputItem } from 'antd-mobile';
import fromFun from './../../unit/from/from';

const socket = io('ws://localhost:9093');


@fromFun
class chat extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: '', // 当前发送的话
            msg: []
        };
        this.sendMsg = this.sendMsg.bind(this);
    }
    componentDidMount(){
        this.props.handleChange('text', '');
        this.props.handleChange('msg', []);
        socket.on('se', (data)=>{
            console.log(data);
            this.props.handleChange('msg', [...this.props.state.msg, data.text]); // 新增元素加入数组
            console.log(this.props);
        });
    }
    sendMsg(){
        console.log(this);
        console.log(this.props.state.text);
        socket.emit('aa', {text: this.props.state.text});
        this.props.handleChange('text', '');
    }
    render(){
        return (
            <div>
                <List>
                    <InputItem type='text' placeholder='请输入...' value={this.props.state.text} onChange={v=>this.props.handleChange('text', v)} extra={<span onClick={this.sendMsg}>发送</span>} />
                </List>
            </div>
        )
    }
}
export default chat;