import {createStore, combineReducers} from 'redux';


// Actions
// Add_Expense
const addExpense = ({id, description, note, amount, createdAt}) => ({
    id,
    description,
    note,
    amount,
    createdAt
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
const filterDefaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};



// State Store
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
}));

console.log(store.getState());