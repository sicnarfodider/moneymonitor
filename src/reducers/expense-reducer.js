import types from '../actions/types';

const DEFAULT_STATE={
    expenses: []
}


export default function(state=DEFAULT_STATE, action){
    switch (action.type) {
        case types.ADD_EXPENSE:
            return [...state, action.payload];
        case types.REMOVE_EXPENSE:
            return state.filter( expense => action.id !== expense.id );
        case types.EDIT_EXPENSE:
            return state.map( expense=>{
                if(expense.id === action.id){
                    return {...expense, ...action.edits}
                }else{
                    return expense
                }
            });
        default:
            return state;
    }
}
