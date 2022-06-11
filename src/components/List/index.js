import React, { Component } from 'react'
import ListItem from './ListItem'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { taskLists , taskDelete , taskComplete} = this.props
    return (
      <div className='list-wrapper'>
        {taskLists.map(taskItem => (<ListItem
         key={taskItem.id}
         task={taskItem}
         taskDelete={taskDelete}
         taskComplete={taskComplete}
         />))}
         
      </div>
    )
  }
}