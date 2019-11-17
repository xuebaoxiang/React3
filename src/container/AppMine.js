import { Carousel, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'
import x3 from './six.png'
import x6 from './seven.png'
import x4 from './nine.png'
import x5 from './ten.png'
import { Grid } from 'antd-mobile';

const arr = [
  '购物车','优惠券','在线客服','我的收藏','我的关注','收货地址','户外家具','全部分类','其他'
]

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `${arr[i]}`,
  }));
  
  const data1 = Array.from(new Array(9)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
  }));

export default class AppMine extends React.Component {
  state = {
    data:
          ['1','2','3','4'],
    imgHeight: 176,
  }
  componentDidMount() {

    setTimeout(() => {
      this.setState({
        data:
              ['x1','x2','x3','x4'],
      });
    }, 100);
  }
  render() {
    return (
      <div>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                
                src= {x3}
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height: '20%' }}
                onLoad={() => {

                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <div>
            <img src={x6} style={{width:'18%',marginTop:'9%'}}/>
            <img src={x4} style={{width:'82%',marginTop:'5%'}}/>
            <img src={x5} style={{width:'100%',marginTop:'5%'}}/>
        </div>
        <div>
            <Grid data={data} columnNum={3} />
        </div>
      </div>
        
    );
  }
}
