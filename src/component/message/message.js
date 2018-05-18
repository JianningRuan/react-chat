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
    render(){
        const Item = List.Item;
        const Brief = Item.Brief;
        console.log('msg', this);
        const userId = this.props.user._id;
        const userInfo = this.props.chat.users;
        console.log(userInfo);
        const msgGroup = {};
         this.props.chat.chatMsg.forEach(v=>{ // 用id作为key
             // console.log(msgGroup[v.chatId]);
             msgGroup[v.chatId] = msgGroup[v.chatId] || [];
             msgGroup[v.chatId].push(v);
             // console.log(msgGroup);
        });

         const chatList = Object.values(msgGroup);
         // console.log(chatList);
        return(
            <div>
                <h2>消息</h2>
                <List>
                    {chatList.map(v=>{
                        console.log(v);
                        const lastMsg = this.getLastMsg(v);
                        const targetId = lastMsg.from === userId? lastMsg.to: lastMsg.from;
                        const unReadNum = v.filter(v=>!v.read && v.to === userId).length;
                        console.log(targetId);
                        return (
                            <Item key={v[0]._id} extra={<Badge text={unReadNum}/>}>
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