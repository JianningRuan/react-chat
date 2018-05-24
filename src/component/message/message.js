import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Badge } from 'antd-mobile';

@connect(
    state=>state
)
class message extends Component {
    getLastMsg(arr){
        return arr[arr.length -1]
    }
    goChat(targetId){
        this.props.history.push(`/chat/${targetId}`)
    }
    render(){
        const Item = List.Item;
        const Brief = Item.Brief;
        const userId = this.props.user._id;
        const userInfo = this.props.chat.users;
        const msgGroup = {};
        this.props.chat.chatMsg.forEach(v=>{ // 用id作为key
             // console.log(msgGroup[v.chatId]);
             msgGroup[v.chatId] = msgGroup[v.chatId] || [];
             msgGroup[v.chatId].push(v);
             // console.log(msgGroup);
        });

         const chatList = Object.values(msgGroup).sort((a, b)=>{
             const aTime = this.getLastMsg(a).createTime;
             const bTime = this.getLastMsg(b).createTime;
             return bTime - aTime;
             // 按照最新的来排序
         });
        return(
            <div>
                <h2>消息</h2>
                <List>
                    {chatList.map(v=>{
                        const lastMsg = this.getLastMsg(v);
                        const targetId = lastMsg.from === userId? lastMsg.to: lastMsg.from;
                        const unReadNum = v.filter(v=>!v.read && v.to === userId).length;
                        return (
                            <Item key={v[0]._id} extra={<Badge text={unReadNum}/>} arrow='horizontal' onClick={()=>{this.goChat(targetId)}}>
                                {lastMsg.msg}
                                <Brief>{userInfo[targetId].name}</Brief>
                            </Item>
                        )
                    })}
                </List>
            </div>
        )
    }
}

export default message;