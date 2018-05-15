import React, { Component } from 'react';
import { Card, WhiteSpace } from 'antd-mobile';

class UserCard extends Component{
    render(){
        const Header = Card.Header;
        const Body = Card.Body;
        return (
            <div>
                <WhiteSpace/>
                {this.props.userList.map(v=>(
                    v.headPic? <Card key={v._id}>
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