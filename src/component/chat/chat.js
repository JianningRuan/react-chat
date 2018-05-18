import React, { Component } from 'react';
// import io from 'socket.io-client';
import { List, InputItem, NavBar, Icon } from 'antd-mobile';
import fromFun from './../../unit/from/from';
import { connect } from 'react-redux';
import { getChatList, sendMsg, recvMsg } from './../../store/chat';
import unit from './../../assets/js/unit';
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
            to: this.props.match.params.id  // 获取地址栏上传递过来的id
        };
        console.log('gouzaohanshuli', this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.props.handleChange('text', '');  // 给高级函数fromFun中添加state
        this.props.handleChange('msg', []); // 给高级函数fromFun中添加state
        if (!this.props.chat.chatMsg.length){
            this.props.getChatList();
            this.props.recvMsg(); // 监听
        }
        console.log(this);
        /*socket.on('se', (data)=>{
            console.log(data);
            this.props.handleChange('msg', [...this.props.state.msg, data.text]); // 新增元素加入数组
            console.log(this.props);
        });*/
    }
    handleSubmit(){
        const from = this.props.user._id;
        const to = this.state.to;
        const msg = this.props.state.text;
        this.props.sendMsg(from, to, msg);
        this.props.handleChange('text', '');
    }
    render(){
        if (!this.props.chat.users[this.state.to]){
            return null
        }
        let chatId = unit.createChatId(this.props.user._id, this.state.to);
        let chatMsg = this.props.chat.chatMsg.filter(v=>v.chatId === chatId); // 过滤信息
        return (
            <div>
                <NavBar model='dark' icon={<Icon type='left'/>}>与{this.props.chat.users[this.state.to].name}对话中</NavBar>
                {chatMsg.map(v=>(
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