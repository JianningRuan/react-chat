import React, { Component } from 'react';
// import io from 'socket.io-client';
import { List, InputItem, NavBar } from 'antd-mobile';
import fromFun from './../../unit/from/from';
import { connect } from 'react-redux';
import { getChatList, sendMsg, recvMsg } from './../../store/chat';
// const socket = io('ws://localhost:9093');

@connect(
    state=>state,
    {getChatList, sendMsg, recvMsg}
)
@fromFun
class chat extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: '', // 当前发送的话
            msg: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.props.handleChange('text', '');
        this.props.handleChange('msg', []);
        if (!this.props.chat.chatMsg.length){
            this.props.getChatList();
            this.props.recvMsg(); // 监听
        }
        /*socket.on('se', (data)=>{
            console.log(data);
            this.props.handleChange('msg', [...this.props.state.msg, data.text]); // 新增元素加入数组
            console.log(this.props);
        });*/
    }
    handleSubmit(){
        const from = this.props.user._id;
        const to = this.props.match.params.id;
        const msg = this.props.state.text;
        this.props.sendMsg(from, to, msg);
        this.props.handleChange('text', '');
    }
    render(){
        return (
            <div>
                <NavBar model='dark'>与xx对话中</NavBar>
                {this.props.chat.chatMsg.map(v=>(
                    <div key={v._id}>
                        {v.msg}
                    </div>
                ))}

                <List>
                    <InputItem type='text' placeholder='请输入...' value={this.props.state.text} onChange={v=>this.props.handleChange('text', v)} extra={<span onClick={this.handleSubmit}>发送</span>} />
                </List>
            </div>
        )
    }
}
export default chat;