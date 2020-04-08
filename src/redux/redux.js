import {createStore, combineReducers} from 'redux';
import {expensesReducer, filtersReducer} from './reducers/reducers';
import {addExpense, removeExpense} from './actions/actions';


// State Store
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));


store.subscribe(() => {
    console.log(store.getState());
});


const rent = store.dispatch(addExpense({description: 'rent', amount: 35000}));
store.dispatch(addExpense({description: 'coffee', amount: 350}));
store.dispatch(addExpense({description: 'book', amount: 2449}));

store.dispatch(removeExpense(rent.expense.id));