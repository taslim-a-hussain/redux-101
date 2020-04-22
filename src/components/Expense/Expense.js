import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import {editExpense, removeExpense} from '../../redux/actions/expenses';

const Expense = (props) => {
    return (
        <div>
            <ExpenseForm label="Edit Expense" expense={props.expense} onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push('/');
            }} />

            <button onClick={() => {
                props.dispatch(removeExpense(props.expense.id));
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(({id}) => id === props.match.params.id)
});

export default connect(mapStateToProps)(Expense);