import {createStore} from 'redux';

/**
 * Reducers
 *  1. Are pure functions
 * 2. Never change state or funtion 
 * @param {object} state 
 * @param {object} action 
 */
const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + action.incrementBy};
        case 'DECREMENT':
            return {count: state.count - action.decrementBy};
        case 'RESET':
            return {count: action.count};
        case 'SET':
            return {count: action.count};
        default:
            return state;
    }
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// Action Generator
const setCount = ({count = 0} = {}) => ({
    type: 'SET',
    count
});

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = ({count = 0} = {}) => ({
    type: 'RESET',
    count
});


// Dispatch Action
store.dispatch(setCount({count: 100}));

store.dispatch(incrementCount({incrementBy: 10}));

store.dispatch(decrementCount({decrementBy: 30}));

store.dispatch(resetCount());