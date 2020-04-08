import {createStore, combineReducers} from 'redux';
import expensesReducer from './reducers/expensesReducer';
import filtersReducer from './reducers/filtersReducer';
import {addExpense} from './actions/expenses';
import {sortByAmount} from './actions/filters';



// State Store
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));


const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        return a.amount < b.amount ? 1 : -1;        
    });
};


store.dispatch(addExpense({description: 'coffee', amount: 300, createdAt: 1000}));
store.dispatch(addExpense({description: 'book', amount: 400, createdAt: -1000}));
store.dispatch(sortByAmount());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);