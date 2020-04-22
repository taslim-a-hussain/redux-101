import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import sortedExpenses from '../../redux/selectors/expenses';

import './List.scss';

const List = (props) => {

    return (
    <div>
        <h2>List</h2>
        {
            props.expenses.map((expense, key) => {
            return (
                <div className="expense-list" key={key}>
                    <Link className="edit-btn" to={`/edit/${expense.id}`}>
                    <h3>{expense.description}</h3>
                    </Link>
                    <p>{expense.amount} - {expense.createdAt}</p>
                </div>
            )
            })
        }
    </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: sortedExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(List);