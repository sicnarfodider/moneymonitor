import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions';

const ExpenseListItem = (props) =>{
    const {id, description, note, amount, createdAt } = props.expense;
    return(
        <div>
            <h1>{description} - ${amount}</h1>
            <small>{note}</small>
            <h3>{createdAt}</h3>
            <button onClick={()=>props.removeExpense(id)} >Delete Expense</button>
        </div>
    )
}

export default connect(null,{ removeExpense })(ExpenseListItem);
