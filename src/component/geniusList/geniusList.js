import React, { Component } from 'react';
import * as server from './../../api/server';
import { Card } from 'antd-mobile';

class geniusList extends Component {
    constructor(props){
        super(props);
        this.state = {
            geniusArr: []
        }
    }
    geniusArr = [];
    componentDidMount(){
        server.userList({type: 'genius'}).then((res)=>{
            console.log(res);
            console.log(this.geniusArr);
            if (res.status === 200 && res.data.code === 1){
                this.state.geniusArr = res.data.data;
                console.log(this.state.geniusArr);
            }
        })
    }
    render(){
        const Header = Card.Header;
        const Body = Card.Body;
        return(
            <div>
                {this.state.geniusArr.map(v=>(
                    <div key={v._id}>11</div>
                ))}
            </div>
        )
    }
}

export default geniusList;