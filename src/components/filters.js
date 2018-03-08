import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortData } from '../actions';

const Filters = (props) =>{
    return(
        <form>
            <label>Find Expense</label>
            <input
                type="text"
                name="textFilter"
                value={props.filters.text}
                onChange={(e)=>props.setTextFilter(e.target.value)}
                />
            <label>Sort Expenses</label>
            <select name="sortType" onChange={(e)=>props.sortData(e.target.value)}>
                <option value="amount">Amount</option>
                <option value="date">Date Created</option>
            </select>
        </form>
    )
}

function mapStateToProps(state){
    return{
        filters: state.filter
    }
}

export default connect(mapStateToProps,{ setTextFilter, sortData })(Filters);
