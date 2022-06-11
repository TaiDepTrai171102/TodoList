import React, { Component } from 'react'
export default class Form extends Component {
    constructor(){
        super();
        this.state = {fullname: '',username:'',password:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event){
        const {name , value } = event.target;
        this.setState ({
            [name]: value
        })
        console.log(name,value);
    }


    handleSubmit(event){
        event.preventDefault();
        console.log('submit ne' ,this.state);

    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <div>
            <input type={'text'} placeholder='Fullname'  onInput={this.handleChange} name='fullname'></input>
            <input type={'text'} placeholder='Username'   onInput={this.handleChange} name='username'></input>
            <input type={'password'} placeholder='Password'  onInput={this.handleChange} name='password'></input>
            <button>Submit</button>
        </div>
        </form>
      )
    }
}