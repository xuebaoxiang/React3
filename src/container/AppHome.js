import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';

export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#000'}}
                    >住吧家居</NavBar>
            </div>
        )
    }
}
