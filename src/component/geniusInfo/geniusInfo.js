import React, { Component } from 'react';
import HeadPicList from './../../unit/headPicList/HeadPicList';
import { List, InputItem, NavBar, TextareaItem, Button, Toast } from 'antd-mobile';
import unit from "../../assets/js/unit";
import * as server from './../../api/server';
import { connect } from 'react-redux';
import { updateDate } from './../../store/user';

@connect(
    state=>state.user,
    { updateDate }
)
class geniusInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            headPic: '',
            title: '',
            desc: ''
        };
        this.dataSubmit = this.dataSubmit.bind(this);
    }
    selectHeadPic(v, i){
        unit.handleChange(this, 'headPic', v.text);
    }
    dataSubmit(){
        if (!this.state.headPic || !this.state.title || !this.state.desc){
            Toast.show('请完整填充资料');
            return null
        }
        server.updateInfo(this.state).then((res)=>{
            if (res.status === 200 && res.data.code === 1){
                this.props.updateDate(res.data.data);
                this.props.history.push(this.props.redirectTo);
            }
        })
    }
    render(){
        return(
            <div>
                <NavBar mode="dark">完善资料</NavBar>
                <HeadPicList selectHeadPic={this.selectHeadPic.bind(this)} />
                <List>
                    <InputItem onChange={v=>{unit.handleChange(this, 'title', v)}} value={this.state.title}>职 位</InputItem>
                    <TextareaItem onChange={v=>unit.handleChange(this, 'desc', v)} value={this.state.desc} title='简介'/>
                </List>
                <Button type='primary' onClick={this.dataSubmit}>保 存</Button>
            </div>
        )
    }
}

export default geniusInfo;