import {createStore, combineReducers} from 'redux';
import {expensesReducer, filtersReducer} from './reducers/reducers';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextfilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters';


// State Store
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));


store.subscribe(() => {
    console.log(store.getState());
});


const rent = store.dispatch(addExpense({description: 'rent', amount: 35000}));
const coffee = store.dispatch(addExpense({description: 'coffee', amount: 350}));
store.dispatch(addExpense({description: 'book', amount: 2449}));

store.dispatch(removeExpense(rent.expense.id));
store.dispatch(editExpense(coffee.expense.id, {description: 'COFFEE'}));
store.dispatch(setTextfilter('book'));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(100));
store.dispatch(setEndDate(500));