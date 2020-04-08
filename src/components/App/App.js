import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Create from '../Create/Create';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/create" component={Create} />
            </Switch>
        </BrowserRouter>
    );
};


export default App;