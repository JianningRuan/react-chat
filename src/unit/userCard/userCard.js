import React, { Component } from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

@withRouter
class UserCard extends Component{
    goChat(val){
        console.log('goChat', val);
        this.props.history.push(`/chat/${val._id}`);
    }
    render(){
        const Header = Card.Header;
        const Body = Card.Body;
        return (
            <div>
                <WhiteSpace/>
                {this.props.userList.map(v=>(
                    v.headPic? <Card key={v._id} onClick={()=>this.goChat(v)}>
                        <Header title={v.user} thumb={require(`./../../assets/img/headPic/${v.headPic}.png`)} extra={<span>求职：{v.title}</span>}/>
                        <Body>
                        {v.type === 'boss'? <div>公司：{v.company}</div>: null}
                        {v.desc.split('\n').map(d=>(
                            <p key={d}>{d}</p>
                        ))}
                        {v.type === 'boss'? <div>薪酬：{v.money}</div>: null}
                        </Body>
                    </Card>: null
                ))}
            </div>
        )
    }
}

export default UserCard;