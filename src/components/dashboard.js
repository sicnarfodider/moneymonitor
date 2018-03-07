import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { addExpense, setTextFilter } from '../actions';
import { getFilteredExpenses } from '../helpers';


class Dashboard extends Component{

    componentDidMount(){
        this.props.addExpense('rent','testing','100')
        this.props.addExpense('gaming bill','testing','500')
        this.props.addExpense('water bill','testing','400')
        console.log('expense', this.props.expense)
        this.props.setTextFilter('bill')
        console.log( 'filters', this.props.filters);
    }

    render(){
        console.log('props',this.props);
        if(this.props.expense.length>0){
            console.log('filtering',getFilteredExpenses(this.props.expense, this.props.filters) )

        }
        return(
            <div>
                Dashboard
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
