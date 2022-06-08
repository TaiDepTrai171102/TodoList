import React, { Component } from 'react'
import ListItem from './ListItem'

export default class List extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const { listTasks } = this.props;
    return (
      <>
        <div className="list-wrapper">
          {
            listTasks.map((item) =>{
              return <ListItem key={item.id} content={item.taskName} status={item.isCompleted}/>
            })
          }
          
        </div>
      </>
    );
  }
}