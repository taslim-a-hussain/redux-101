import React from 'react';
import {connect} from 'react-redux';
import {setTextfilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../redux/actions/filters';
import { DateRangePicker } from 'react-dates';

class Filter extends React.Component {

    state = {
        focusedInput: null
    };
    
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = focusedInput => this.setState({ focusedInput });

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextfilter(e.target.value));
                }} />
                <select id="Option" className="sort-by" value={this.props.filters.sortBy} onChange={(e) => {
                    e.target.value === 'amount' ? this.props.dispatch(sortByAmount()) : this.props.dispatch(sortByDate());
                }}>
                    <option value="date">Sort By Date</option>
                    <option value="amount">Sort By Amount</option>
                </select>
                
                {
                    this.props.filters.sortBy === 'date' &&
                    <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="start-id-abc7854adfcdflsk234sdlk"
                    endDate={this.props.filters.endDate}
                    endDateId="end-id-abc7854adfcdflsk234sdlk"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    />
                }
                
            </div>
        );
    }

} // End of the class


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}; 

export default connect(mapStateToProps)(Filter);