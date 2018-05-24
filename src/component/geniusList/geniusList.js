import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './../../unit/userCard/userCard';
import { getUserList } from './../../store/chatUser';

@connect(
    state=>state.chatUser,
    { getUserList }
)
class geniusList extends Component {
    constructor(props){
        super(props);
        this.state = {
            geniusArr: []
        }
    }
    componentDidMount(){
        this.props.getUserList('genius');
    }

    render(){
        return(
            <UserCard userList={this.props.userList} />
        )
    }
}

export default geniusList;