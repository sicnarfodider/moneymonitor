import types from './types';
import uuid from 'uuid';


export function addExpense(
    description= '',
    note='',
    amount= null,
    createdAt = null
    ){
    return{
        type: types.ADD_EXPENSE,
        payload: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}


export function removeExpense(id=null){
    return{
        type: types.REMOVE_EXPENSE,
        id
    }
}

export function editExpense(id, edits){
    return{
        type: types.EDIT_EXPENSE,
        id,
        edits
    }
}
