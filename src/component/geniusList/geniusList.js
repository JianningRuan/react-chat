import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as server from './../../api/server';
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
        /*server.userList({type: 'genius'}).then((res)=>{
            console.log(res);
            if (res.status === 200 && res.data.code === 1){
                this.setState({
                    geniusArr: res.data.data
                });
            }
        })*/

        this.props.getUserList('genius');
    }

    render(){
        return(
            <UserCard userList={this.props.userList} />
        )
    }
}

export default geniusList;