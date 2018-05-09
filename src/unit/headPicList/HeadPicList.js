import React, { Component } from 'react';
import { Grid, List } from 'antd-mobile';

class headPicList extends Component{
    render(){
        const picList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'.split(',').map((v, i)=>({
            icon: require(`./../../assets/img/headPic/${v}.png`),
            text: `${v}`
        }));

        return(
            <div>
                <List>
                    <Grid data={picList} columnNum={5} onClick={(v, i)=>{
                        this.props.selectHeadPic(v, i);
                    }} />
                </List>
            </div>
        )
    }
}

export default headPicList