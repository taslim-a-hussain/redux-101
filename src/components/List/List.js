import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import sortedExpenses from '../../redux/selectors/expenses';
import summary from '../../redux/selectors/summary';
import Summary from '../Summary/Summary';

import './List.scss';

const List = (props) => {

    const summ = summary(props.expenses);

    return (
    <div>
        <Summary total={summ.total} length={summ.length} />
        {summ.length !== 0 && <h2>List</h2>}
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