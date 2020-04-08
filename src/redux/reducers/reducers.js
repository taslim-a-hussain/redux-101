// Expenses Reducer
const expensesDefaultState = [];
export const expensesReducer = (state = expensesDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
           return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if (expense.id === action.id) {
                    return {...expense, ...action.update};
                } else {
                    return expense;
                }
            });
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
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text};
        default:
            return state;
    }
};