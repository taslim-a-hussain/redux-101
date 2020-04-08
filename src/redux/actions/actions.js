import {v4 as uuid} from 'uuid';


// Add_Expense
export const addExpense = ({description='', note='', amount=0, createdAt=0} = {}) => ({
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
export const removeExpense = (id) => ({
    type:'REMOVE_EXPENSE',
    id
});

// Edit_Expense
// Set_Text_Filter
// Sort_By_Date
// Sort_By_Amount
// Set_Start_Date
// Set_End_Date