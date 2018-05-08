import React, { Component} from 'react';
import { connect } from 'react-redux';

@connect(
    state=>state.user
)
class fillData extends Component{
    componentDidMount(){
        console.log('fillPage:', this.props);
    }
    render(){
        return (
            <div>666</div>
        )
    }
}
export default fillData;