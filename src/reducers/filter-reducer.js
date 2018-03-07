import types from '../actions/types';

const DEFAULT_STATE={
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

export default function(state=DEFAULT_STATE, action){
    switch (action.type) {
        case types.SET_TEXT_FILTER:
            return {...state, text: action.textFilter};
        case types.SORT_BY_DATE:
        case types.SORT_BY_AMOUNT:
            return {...state, sortBy: action.sort};
        case types.SET_START_DATE:
            return {...state, startDate: action.date};
        case types.SET_END_DATE:
            return {...state, endDate: action.date}
        default:
            return state;
    }
}
