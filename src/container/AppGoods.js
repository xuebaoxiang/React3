import { Carousel} from 'antd-mobile';
import React from 'react'
import one from './three.png'
import two from './four.png'
import four from './3.jpg'
import three from './first.png'
import { Grid } from 'antd-mobile';

const arr = [
  '桌','床','椅','书架','沙发','家居饰品','户外家具','全部分类'
]
const data = Array.from(new Array(8)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `${arr[i]}`,
}));

const data1 = Array.from(new Array(8)).map(() => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));

export default class AppGoods extends React.Component {
  state = {
    data: /*['1', '2', '3'],*/
          ['1','2','3','4'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: /*['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],*/
              ['one','two','three','four'],
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
                /*src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}*/
                src= {three}
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height: '20%' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <div>
          <Grid data={data} hasLine={false} />
        </div>  
        <div>
          <img src={one} alt="" style={{width: '40%',height: '30%',marginTop: '4%',marginLeft: '6%'}}/>
          <img src={two} alt="" style={{width: '40%',height: '30%',marginLeft: '5%',marginTop: '4%'}}/>
        </div>
        <div>
        <img src={four} alt="" style={{width: '85%',height: '30%',marginTop: '4%',marginLeft: '6%'}}/>
        </div>
      </div>
    );
  }
}
