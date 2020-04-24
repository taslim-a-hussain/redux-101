import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import {addExpense} from '../../redux/actions/expenses';
import Added from '../Added/Added';

const Create = ({expenses, dispatch, history}) => {

    const lastIndex = expenses.length - 1;
    const lastInserted = expenses[lastIndex];
    
    return (
        <div>
            <h2>Add Expense</h2>
            <ExpenseForm exitBtn onSubmit={(expense, reset) => {
                dispatch(addExpense(expense));
                reset ? reset() : history.push('/');
            }} />
            <Added expense={lastInserted} />
        </div>
    );
}; 

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};


export default connect(mapStateToProps)(Create);