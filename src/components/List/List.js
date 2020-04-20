import React from 'react';
import {connect} from 'react-redux';

const List = (props) => {
    console.log(props.expenses);
    
    return (
    <div>
        <h2>List</h2>
        {
            props.expenses.map((expense, key) => {
            return <div key={key}>{expense}</div>
            })
        }
    </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps)(List);