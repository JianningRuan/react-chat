import React, { Component } from 'react';
import { Grid, List } from 'antd-mobile';
import './headPicList.less';

class headPicList extends Component{
    constructor(props){
        super(props);
        this.state = {
            icon: ''
        }
    }
    render(){
        const picList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'.split(',').map((v, i)=>({
            icon: require(`./../../assets/img/headPic/${v}.png`),
            text: `${v}`
        }));

        return(
            <div>
                {this.state.icon ? (
                    <div className='head-pic-title flex flex-align-center'>
                        <span>已选择</span>
                        <img className='head-pic-item' alt={this.state.icon} src={require(`./../../assets/img/headPic/${this.state.icon}.png`)}/>
                    </div>
                ): (
                    <div className='head-pic-title'>请选择</div>
                )}
                <List>
                    <Grid data={picList} columnNum={5} onClick={(v, i)=>{
                        // this.state.icon = v.text;
                        this.setState('icon', v.text);
                        this.props.selectHeadPic(v, i);
                    }} />
                </List>
            </div>
        )
    }
}

export default headPicList