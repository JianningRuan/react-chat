import React, { Component} from 'react';
import { connect } from 'react-redux';
import { NavBar, List, InputItem, TextareaItem, Button } from 'antd-mobile';
import HeadPicList from '../../unit/headPicList/HeadPicList'
import unit from './../../assets/js/unit';

@connect(
    state=>state.user
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
        }
    }
    componentDidMount(){
        console.log('fillPage:', this.props);
    }

    selectHeadPic(v, i){
        console.log(v, i);
        unit.handleChange(this, 'headPic', v.text);
    }
    render(){
        return (
            <div>
                <NavBar mode="dark">BOSS完善资料</NavBar>
                <HeadPicList selectHeadPic={this.selectHeadPic.bind(this)}/>
                <List>
                    <InputItem onChange={v=>unit.handleChange(this, 'title', v)} value={this.state.title}>职位名称</InputItem>
                    <InputItem onChange={v=>unit.handleChange(this, 'company', v)} value={this.state.company}>公司名字</InputItem>
                    <InputItem onChange={v=>unit.handleChange(this, 'money', v)} value={this.state.money}>薪资</InputItem>
                    <TextareaItem rows={3} title={'职位要求'} value={this.state.desc} />
                </List>
                <Button type='primary'>提 交</Button>
            </div>
        )
    }
}
export default bossInfo;