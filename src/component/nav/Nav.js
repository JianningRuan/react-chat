import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';

class Nav extends Component{
    render(){
        return(
            <div>
                <TabBar>
                    <TabBar.Item title='a' />
                    <TabBar.Item title='b' />
                    <TabBar.Item title='c' />
                </TabBar>
            </div>
        )
    }
}

export default Nav;