import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './../../unit/userCard/userCard';
import { getUserList } from './../../store/chatUser';

@connect(
    state=>state.chatUser,
    { getUserList }
)
class bossList extends Component {
    componentDidMount(){
        this.props.getUserList('boss');
    }
    render(){
        return(
            <UserCard userList={this.props.userList}/>
        )
    }
}

export default bossList;