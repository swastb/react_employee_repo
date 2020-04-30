import React, { Component } from 'react';

import './Employee.css';


class Employee extends Component{

    state = {
        name: '',
        age :''
    }

    setName = (event) => {
        this.setState({name : event.target.value})
    } 

    setAge = (event) => {
        this.setState({age : event.target.value})
    } 

render(){
    return (
    <div className="Employee">
         <input type="text" name="name" value={this.props.name} onChange={this.setName}></input>
        <p>Age: {this.props.age}</p>
        <button value="Delete" onClick={this.props.clicked}>Delete</button>
    </div>
    )}


}
export default Employee;