import {createStore, combineReducers} from 'redux';

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