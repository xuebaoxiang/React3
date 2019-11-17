import React, { Component } from 'react'
import { NavBar, Icon} from 'antd-mobile';

export default class AppSense extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#000'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'#000', marginRight: '16px' }} />,
                    ]}
                    >灵感</NavBar>
            </div>
        )
    }
}
