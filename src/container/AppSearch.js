import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import React,{Component} from 'react'

export default class AppSearch extends React.Component {
  state = {
    value: '',
  };
  componentDidMount() {
    //this.autoFocusInst.focus();
  }
  onChange= (value) => {
    this.setState({ value });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  render() {
    return (<div> 
      <input type="search" placeholder=""
      onChange={this.onChange}/>
    </div>);
  }
}

