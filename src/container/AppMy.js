import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';

export default class AppMy extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#000'}}
                    rightContent={[
                        <img src={require('./setting.png')} style={{ color:'#000', marginRight: '16px' ,width:'22px',height:'22px' }} />,
                    ]}
                    >我的</NavBar>
            </div>
        )
    }
}
