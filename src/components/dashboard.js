import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions';


class Dashboard extends Component{

    componentDidMount(){
        this.props.addExpense('rent','testing','100')
    }

    render(){
        console.log('props',this.props);
        return(
            <div>
                Dashboard
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        expense: state.expense
    }
}
export default connect(mapStateToProps,{ addExpense })(Dashboard);
