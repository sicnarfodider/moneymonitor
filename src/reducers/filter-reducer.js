import types from '../actions/types';

const DEFAULT_STATE={
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

export default function(state=DEFAULT_STATE, action){
    switch (action.type) {
        default:
            return state;
    }
}
