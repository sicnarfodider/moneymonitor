import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { addExpense, setTextFilter } from '../actions';
import ExpenseList from './expenseList';
import Filters from './filters';

class Dashboard extends Component{

    componentWillMount(){
        this.props.addExpense('rent','testing','100','2000')
        this.props.addExpense('gaming bill','testing','500','100230')
        this.props.addExpense('water bill','testing','400','103210')
        this.props.setTextFilter('e')
    }

    render(){
        console.log('props',this.props);
        return(
            <div>
                Dashboard
                <Filters />
                <ExpenseList />
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        expense: state.expense,
        filters: state.filter
    }
}
export default connect(mapStateToProps,{ addExpense, setTextFilter })(Dashboard);
