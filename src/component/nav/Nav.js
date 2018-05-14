import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
@withRouter
class Nav extends Component{
    static propTypes = {
        navList: PropTypes.array.isRequired
    };
    render(){
        console.log('nav:', this);
        const pathName = this.props.location.pathname;
        const navList = this.props.navList.filter(v=>!v.hide);
        return(
            <div>
                <TabBar>
                    {navList.map(v=>(
                        <TabBar.Item key={v.path} title={v.title} selected={v.path === pathName} icon={{uri: require(`./../../assets/img/nav/${v.icon}.svg`)}} selectedIcon={{uri: require(`./../../assets/img/nav/${v.selectedIcon}.svg`)}} onPress={()=>{
                            this.props.history.push(v.path);
                        }} />
                    ))}
                </TabBar>
            </div>
        )
    }
}

export default Nav;