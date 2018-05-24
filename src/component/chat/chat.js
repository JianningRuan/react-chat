import React, { Component } from 'react';
import { List, InputItem, NavBar, Icon, Grid } from 'antd-mobile';
import fromFun from './../../unit/from/from';
import { connect } from 'react-redux';
import { getChatList, sendMsg, recvMsg, readMsg } from './../../store/chat';
import unit from './../../assets/js/unit';

import './chat.less';

@connect(
    state=>state,
    {getChatList, sendMsg, recvMsg, readMsg}
)
@fromFun
class chat extends Component{
    constructor(props){
        super(props);
        this.state = {
            to: this.props.match.params.id,  // 获取地址栏上传递过来的id
            isShowEmoji: false // 是否显示emoji表情
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.showEmoji = this.showEmoji.bind(this);
        this.clickEmoji = this.clickEmoji.bind(this);
    }
    componentDidMount(){
        this.props.handleChange('text', '');  // 给高级函数fromFun中添加state
        this.props.handleChange('msg', []); // 给高级函数fromFun中添加state
        this.props.handleChange('isShowEmoji', false); // 是否显示emoji表情
        if (!this.props.chat.chatMsg.length){
            this.props.getChatList();
            this.props.recvMsg(); // 监听
        }
    }
    componentWillUnmount(){
        // 把未读信息改成已读
        this.props.readMsg(this.state.to); // from to
    }
    handleSubmit(){
        const from = this.props.user._id;
        const to = this.state.to;
        const msg = this.props.state.text;
        this.props.sendMsg(from, to, msg);
        this.props.handleChange('text', '');
    }
    showEmoji(){
        this.props.handleChange('isShowEmoji', !this.props.state.isShowEmoji);
        this.correctFlex();
    }
    correctFlex(){
        setTimeout(()=>{
            window.dispatchEvent(new Event('resize'))
        }, 0)
    }
    clickEmoji(el, index){
        this.props.handleChange('text', this.props.state.text + el.text);
    }
    render(){
        if (!this.props.chat.users[this.state.to]){
            return null
        }
        let chatId = unit.createChatId(this.props.user._id, this.state.to);
        let chatMsg = this.props.chat.chatMsg.filter(v=>v.chatId === chatId); // 过滤信息

        const emoji = '😵,🐸,😊,😃,😋,😅,😍,😘,😐,😶,😏,😣,😥,😪,😫,😒,😲,😤,😤,😢,😭,😠,😈'.split(',').map(v=>({text: v}));
        console.log('emoji:', emoji);
        return (
            <div>
                <NavBar model='dark' icon={<Icon type='left'/>}>与{this.props.chat.users[this.state.to].name}对话中</NavBar>
                {chatMsg.map(v=>(
                    <div key={v._id}>
                        {v.msg}
                    </div>
                ))}
                <List>
                    <InputItem type='text' placeholder='请输入...' value={this.props.state.text} onChange={v=>this.props.handleChange('text', v)} extra={<div><span className='emoji-btn' onClick={this.showEmoji}>😵</span><span onClick={this.handleSubmit}>发送</span></div>} />
                </List>
                {this.props.state.isShowEmoji? <Grid className='emoji-grid' data={emoji} columnNum={7} isCarousel={true} carouselMaxRow={3} onClick={this.clickEmoji} />: null}
            </div>
        )
    }
}
export default chat;