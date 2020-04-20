import React from 'react';
import {connect} from 'react-redux';
import {setTextfilter} from '../../redux/actions/filters';

const Filter = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={(e) => {
            props.dispatch(setTextfilter(e.target.value));
        }} />
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}; 

export default connect(mapStateToProps)(Filter);