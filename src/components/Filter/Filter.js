import React from 'react';
import {connect} from 'react-redux';
import {setTextfilter, sortByAmount, sortByDate} from '../../redux/actions/filters';

const Filter = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={(e) => {
            props.dispatch(setTextfilter(e.target.value));
        }} />
        <select className="sort-by" value={props.filters.sortBy} onChange={(e) => {
            e.target.value === 'amount' ? props.dispatch(sortByAmount()) : props.dispatch(sortByDate());
        }}>
            <option value="date">Sort By Date</option>
            <option value="amount">Sort By Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}; 

export default connect(mapStateToProps)(Filter);