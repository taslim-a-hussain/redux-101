import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Create from '../Create/Create';
import Expense from '../Expense/Expense';
import Help from '../Help/Help';
import NotFound from '../NotFound/NotFound';

import store from '../../redux/store';
import {addExpense} from '../../redux/actions/expenses';
import {setTextfilter} from '../../redux/actions/filters';
import state from '../../redux/selectors/expenses';


import './App.scss';

class App extends React.Component {

    render() {

        // Add expense water bill
        store.dispatch(addExpense({description: 'water bill', amount: 15000}));
        // Add expense gas bill
        store.dispatch(addExpense({description: 'gas bill', amount: 8000}));
        // Set text filter -> bill
        store.dispatch(setTextfilter('bill'));
        // Get visible expenses -> print visibles ones to screen
        const expenses = store.getState().expenses;
        const filters = store.getState().filters;

        // Print out
        console.log(state(expenses, filters));

        return (
            <BrowserRouter>
                <div className="app">
                <Header />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/create" component={Create} />
                    <Route path="/expense" component={Expense} />
                    <Route path="/help" component={Help} />
                    <Route component={NotFound} />
                </Switch>
                </div>
            </BrowserRouter>
        );
    }
};


export default App;