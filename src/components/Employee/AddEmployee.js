import React,{Component} from 'react';

import './AddEmployee.css';

class AddEmployee extends Component {

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
        return(
            <div className="AddEmployee">
                <input type="text" name="name" onChange={this.setName}></input>
                <input type="number" name="age" onChange={this.setAge}></input>
                <button onClick={()=> this.props.employeeAdded(this.state.name,this.state.age)}>Add Employee</button>
            </div>
        );
    }
}

export default AddEmployee;