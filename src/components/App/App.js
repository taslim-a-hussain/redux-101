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


import './App.scss';

class App extends React.Component {


    render() {

        store.dispatch(addExpense({description: 'Water bill', amount: 11000}));
        store.dispatch(addExpense({description: 'gas bill', amount: 11000, createdAt: 2000}));
        store.dispatch(addExpense({description: 'rent', amount: 59000, createdAt: 1000}));


        return (
            <BrowserRouter>
                <div className="app">
                <Header />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/create" component={Create} />
                    <Route path="/edit/:id" component={Expense} />
                    <Route path="/help" component={Help} />
                    <Route component={NotFound} />
                </Switch>
                </div>
            </BrowserRouter>
        );
    }
};


export default App;