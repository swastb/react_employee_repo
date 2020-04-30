import React, { Component } from 'react';
import { connect } from 'react-redux';

import Employee from '../components/Employee/Employee';
import AddEmployee from '../components/Employee/AddEmployee'
import * as actionTypes from '../actions/ActionTypes';
import data from '.././data/data.json';

class Employees extends Component {
    
    render () {
        return (
            <div>
                <AddEmployee employeeAdded={this.props.onAddedEmployee}></AddEmployee>
                {this.props.prs.map(employee => (
                    <Employee 
                        key={employee.id}
                        name={employee.name} 
                        age={employee.age} 
                        clicked={() => this.props.onRemovedEmployee(employee.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prs: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedEmployee: (name,age) => dispatch({type: actionTypes.ADD,payload: {name:name,age:age}}),
        onRemovedEmployee: (id) => {dispatch({type: actionTypes.DELETE, employeeId: id})}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);