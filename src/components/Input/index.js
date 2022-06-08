import React, { Component } from 'react'
import './style.css'

export default class Input extends Component {
 /* contructor(props){
   
    this.handleChangeInput = this.handleChangeInput.bind(this)
  }

handleChangeInput(event){
  console.log(event.target.value);  
}
*/
  render() {
    return (
      <input className='input input--task' placeholder='Add new task in here'/* onChange={this.handleChangeInput}*/>

      </input>
    )
  }
}