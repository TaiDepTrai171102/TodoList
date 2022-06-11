import ButtonSpecial from '../../components/Button/ButtonSpecial'
import Divider from '../../components/Divider'
import React, { Component } from 'react'
import ListContent from './ListContent'
import './style.css'

export default class ListItem extends Component {
  constructor(props) {
    super(props)
    this.props = props;
    
  }

  render() {
    const { task , taskDelete , taskComplete } = this.props
    return (
      <>
        <div className='list-item'>
          <div>
            <ListContent content={task.taskName} isCompleted={task.isCompleted} />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {
            
            
            !task.isCompleted &&
            <ButtonSpecial completed  onClick={() => taskComplete(task.id)} />
            
  }
            <ButtonSpecial remove onClick={() => taskDelete(task.id) }  />
          </div>
        </div>
        <Divider fullWidth />
      </>
    )
  }
}