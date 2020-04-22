import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import {addExpense} from '../../redux/actions/expenses';

const Create = ({dispatch, history}) => (
    <div>
        <h2>Add Expense</h2>
        <ExpenseForm onSubmit={(expense) => {
            dispatch(addExpense(expense));
            history.push('/');
        }} />
    </div>
);


export default connect()(Create);