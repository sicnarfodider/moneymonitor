
export function getFilteredExpenses(expenses=[],filters){
    const { text, sortBy, startDate , endDate } = filters;
    return expenses.filter( (expense) =>{
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = typeof startDate !== 'number'  || expense.createdAt >= startDate ;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

        return textMatch && startDateMatch && endDateMatch;
    }).sort((a,b)=>{
        if(sortBy === 'amount'){
            return b.amount - a.amount;
        }
        if(sortBy === 'date'){
            return a.createdAt - b.createdAt;
        }
    });
};
