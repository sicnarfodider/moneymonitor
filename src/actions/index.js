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

export function setTextFilter(textFilter){
    return{
        type: types.SET_TEXT_FILTER,
        textFilter
    }
}

export function sortData(sortType){
    const type = sortType === 'date' ? types.SORT_BY_DATE : types.SORT_BY_AMOUNT
    const sort = sortType === 'date' ? 'date' : 'amount'
    return{
        type,
        sort
    }
}

export function setDate(date, setType){
    const type = setType === 'start' ? types.SET_START_DATE : types.SET_END_DATE
    return{
        type,
        date
    }
}
