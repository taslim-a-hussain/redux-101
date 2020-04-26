import {removeExpense, editExpense, addExpense, startAddExpense} from '../../../redux/actions/expenses';

test('Remove expense by an id', () => {
    const result = removeExpense('1234');
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234'
    });
});

test('Edit expense by an id and passing a new expense obj', () => {
    const result = editExpense('1234', {description: 'coffee'});
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234',
        update: {
            description: 'coffee'
        }
    });
});

test('Start Add Expense', () => {
    const expense = {
        description: 'coffee',
        note: 'Morning coffee',
        amount: 2.30,
        createdAt: 3000
    };
    const result = startAddExpense(expense);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expense
        }
    });
});

test('Add expense test defaults', () => {

    const result = addExpense();
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});