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
        case 'ADD_EXPENSE':
            
            break;
    
        default:
            return state;
    }
};


const state = {
    expenses: [
        {
            id: "123abc8910",
            description: 'Jan rent',
            note: 'This was the final payment for the address',
            amount: 31900,
            createdAt: 0
        }
    ],
    filter: {
        text: 'rent',
        sortBy: 'amount', // amount or date
        startDate: undefined,
        endDate: undefined
    }
};