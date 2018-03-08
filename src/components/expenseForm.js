import React,{ Component } from 'react';


class ExpenseForm extends Component{
    constructor(props){
        super(props);

        this.state={
            description: '',
            note: '',
            amount: 0
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputs = this.handleInputs.bind(this);
    }

    handleInputs(e){
        const {value, name} = e.target
        console.log('from handleInputs',value, name);
        this.setState({
            [name] : value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        console.log('this state', this.state);
    }

    render(){
        const { description, note, amount } = this.state
        console.log('state',this.state);
        return(
            <div>
                This is Expense Form
                <form onSubmit={this.handleSubmit}>
                    <label> Expense Name/Description</label>
                    <input
                        name="description"
                        type="text" value={description}
                        onChange={(e)=>this.handleInputs(e)}
                         />
                    <label> Notes </label>
                    <input name="note"
                        type="text" value={note}
                        onChange={(e)=>this.handleInputs(e)}/>
                    <label> Amount </label>
                    <input name="amount"
                        type="number" value={amount}
                        onChange={(e)=>this.handleInputs(e)}/>
                    <button> Add Expense  </button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;
