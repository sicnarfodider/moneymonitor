import React from 'react';
import { connect } from 'react-redux';
import { getFilteredExpenses } from '../helpers';
import ExpenseListItem from './expenseListItem';



const ExpenseList = (props) =>{
    const list = props.expenses.map((expense, index)=>{
        return <ExpenseListItem expense={expense} key={index} />
    })
    console.log(props);
    return(
        <div>
            <h1> Your Expense List</h1>
            {list.length > 0 ? list : <p>You don't have any current list</p>}
        </div>
    )
}

function mapStateToProps(state){
    return{
        expenses: getFilteredExpenses(state.expense, state.filter)
    }
}

export default connect(mapStateToProps)(ExpenseList);
