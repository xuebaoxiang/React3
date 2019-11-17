import { Carousel} from 'antd-mobile';
import React from 'react'
import first from './first.png'
import second from './2.jpg'
import third from './3.jpg'
export default class AppSummary extends React.Component {
  state = {
    data: /*['1', '2', '3'],*/
          ['1','2'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: /*['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],*/
              ['first','second'],
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
                src= {first}
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height: '35%' }}
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
          <img src={first} alt="" style={{width: '30%',height: '30%',marginTop: '5%'}}/>
          <img src={second} alt="" style={{width: '30%',height: '30%',marginLeft: '5%',marginRight: '5%',marginTop: '5%'}}/>
          <img src={second} alt="" style={{width: '30%',height: '30%',marginTop: '5%'}}/>
        </div>
        <div>
          <p style={{fontSize: '25px'}}>热门推荐</p>
        </div>
        <div style={{position: 'relative'}}>
          <img src={third} alt="" style={{ 
            height: '30%', 
            width: '100%',
          }}/>
        </div>
      </div>
        
    );
  }
}
