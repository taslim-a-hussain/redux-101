import {createStore, combineReducers} from 'redux';


// Actions
// Add_Expense
// Remove_Expense
// Edit_Expense
// Set_Text_Filter
// Sort_By_Date
// Sort_By_Amount
// Set_Start_Date
// Set_End_Date


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