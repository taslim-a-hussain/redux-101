import {db} from '../../firebase/firebase';


// Add_Expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

// Start Add Expense
export const startAddExpense = (expenseData = {}) => {
    return (dispatchNow) => {
        const {description='', note='', amount=0, createdAt=0} = expenseData;
        const expense = {description, note, amount, createdAt};
        
        // Save expense into the expenses database 
        // Then dispatch
        db.ref('expenses').push(expense).then((data) => {
            dispatchNow(addExpense({
                id: data.key,
                ...expense
            }));
        });
    };
};


// Remove_Expense
export const removeExpense = (id) => ({
    type:'REMOVE_EXPENSE',
    id
});

// Edit_Expense
export const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
});