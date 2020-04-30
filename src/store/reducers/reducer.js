import * as actionTypes from '../../actions/ActionTypes';
import data from '../../data/data.json';

const initialState = {
    results: data
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD:
            console.log(action.payload);
            return { 
                ...state,
                results: state.results.concat({id: new Date(),id:action.payload.name,name:action.payload.name,age:action.payload.age})
            }
        case actionTypes.DELETE:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)            
            const updatedArray = state.results.filter(result => result.id !== action.employeeId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
};

export default reducer;