// Expenses Reducer
const expensesDefaultState = [];
export const expensesReducer = (state = expensesDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
           return state.filter(({id}) => id !== action.id);
        default:
            return state;
    }
};


// Filter Reducer
const filtersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

export const filtersReducer = (state = filtersDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};