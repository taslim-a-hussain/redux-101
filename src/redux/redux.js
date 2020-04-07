import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


// Actions
// Add_Expense
const addExpense = ({description='', note='', amount=0, createdAt=0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});


// Remove_Expense
// Edit_Expense
// Set_Text_Filter
// Sort_By_Date
// Sort_By_Amount
// Set_Start_Date
// Set_End_Date


// Expenses Reducer
const expensesDefaultState = [];
const expensesReducer = (state = expensesDefaultState, action) => {
    switch (action.type) {
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

const filtersReducer = (state = filtersDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};



// State Store
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

console.log(store.getState());