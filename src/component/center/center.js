import React, { Component } from 'react';
import { Result, List, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';

@connect(
    state=>state.user
)
class center extends Component {
    render(){
        console.log(this.props);
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
                    <Item>退出登录</Item>
                </List>
            </div>
        ): null
    }
}

export default center;

/*<Result img={<img src={require(`./../../assets/img/headPic/${this.props.headPic}.png`)}/>} title={this.props.user} message={null}/>*/