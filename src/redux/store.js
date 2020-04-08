import {createStore, combineReducers} from 'redux';
import expensesReducer from './reducers/expensesReducer';
import filtersReducer from './reducers/filtersReducer';



// State Store
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));


export default store;