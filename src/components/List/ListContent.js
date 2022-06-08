import React, { Component } from 'react'

export default class ListContent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const { content , status } = this.props;
    if(!status){
      return <p>{ content }</p>;
    }else{
      return <p style={{color: "blue"}}>{ content }</p>;
    }
  }
}