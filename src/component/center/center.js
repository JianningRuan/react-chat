import React, { Component } from 'react';
import { Result, List, WhiteSpace, Modal } from 'antd-mobile';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import browserCookie from 'browser-cookies';
import { toLogout } from './../../store/user';
const alert = Modal.alert;
@connect(
    state=>state.user,
    { toLogout }
)
class center extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout(){
        alert('注销', '确认注销吗？', [
            {text: '取消', onPress: ()=>console.log('取消')},
            {text: '确认', onPress:()=> {
                browserCookie.erase('userId');
                this.props.toLogout();
            }}
        ]);
    }
    render(){
        const Item = List.Item;
        const Brief = Item.Brief;
        return this.props.user? (
            <div>
                <Result imgUrl={require(`./../../assets/img/headPic/${this.props.headPic}.png`)} title={this.props.user} message={this.props.type === 'boss'? this.props.company: null}/>
                <List>
                    <Item multipleLine>
                        {this.props.title}
                        {this.props.desc.split('\n').map(v=>(
                            <Brief key={v}>{v}</Brief>
                        ))}
                    </Item>
                </List>
                <WhiteSpace/>
                <List>
                    <Item onClick={this.logout}>退出登录</Item>
                </List>
            </div>
        ): <Redirect to='/login'/>
    }
}

export default center;

/*<Result img={<img src={require(`./../../assets/img/headPic/${this.props.headPic}.png`)}/>} title={this.props.user} message={null}/>*/