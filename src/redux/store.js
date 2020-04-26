import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import expensesReducer from './reducers/expensesReducer';
import filtersReducer from './reducers/filtersReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// State Store
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}), composeEnhancers(applyMiddleware(thunk)));


export default store;