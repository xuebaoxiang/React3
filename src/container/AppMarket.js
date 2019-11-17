import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';

export default class AppMarket extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#000'}}
                    rightContent={[
                        <img src={require('./car.png')} style={{ color:'#000', marginRight: '16px' ,width:'22px',height:'22px' }} />,
                       
                    ]}
                    >商城</NavBar>
            </div>
        )
    }
}
