import React, { Component} from 'react';
import { connect } from 'react-redux';
import { NavBar, List, InputItem, TextareaItem, Button, Toast } from 'antd-mobile';
import HeadPicList from '../../unit/headPicList/HeadPicList'
import unit from './../../assets/js/unit';
import { updateDate } from './../../store/user';
import * as server from './../../api/server';

@connect(
    state=>state.user,
    { updateDate }
)
class bossInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            headPic: '',
            company: '',
            money: '',
            title: '',
            desc: ''
        };
        this.dataSubmit = this.dataSubmit.bind(this);
    }
    componentDidMount(){
        console.log('fillPage:', this.props);
    }

    selectHeadPic(v, i){
        console.log(v, i);
        unit.handleChange(this, 'headPic', v.text);
    }
    dataSubmit(){
        if (!this.state.headPic || !this.state.company || !this.state.money || !this.state.title || !this.state.desc){
            Toast.show('请完整填充信息');
            return null
        }
        server.updateInfo(this.state).then((res)=>{
            console.log(res);
            if (res.status === 200 && res.data.code === 1){
                this.props.updateDate(res.data.data);
                console.log(this.props.redirectTo);
                this.props.history.push(this.props.redirectTo);
            }
        });
    }
    render(){
        return (
            <div>
                <NavBar mode="dark">完善资料</NavBar>
                <HeadPicList selectHeadPic={this.selectHeadPic.bind(this)}/>
                <List>
                    <InputItem onChange={v=>unit.handleChange(this, 'title', v)} value={this.state.title}>职位名称</InputItem>
                    <InputItem onChange={v=>unit.handleChange(this, 'company', v)} value={this.state.company}>公司名字</InputItem>
                    <InputItem onChange={v=>unit.handleChange(this, 'money', v)} value={this.state.money}>薪资</InputItem>
                    <TextareaItem rows={3} title={'职位要求'} onChange={v=>unit.handleChange(this, 'desc', v)} value={this.state.desc} />
                </List>
                <Button type='primary' onClick={this.dataSubmit}>提 交</Button>
            </div>
        )
    }
}
export default bossInfo;