import { combineReducers } from 'redux';
import expenseReducer from './expense-reducer';
import filterReducer from './filter-reducer';

export default combineReducers({
    expense: expenseReducer,
    filter: filterReducer
})
