import React from 'react';

import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        const { setStartDate, setEndDate } = this.props;
        setStartDate(startDate);
        setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState({ calendarFocused });
    };

    onTextChange = (e) => {
        const { setTextFilter } = this.props;
        setTextFilter(e.target.value);
    };

    onSortChange = (e) => {
        const { sortByAmount, sortByDate } = this.props;
        if (e.target.value === 'date') {
            sortByDate();
        } else if (e.target.value === 'amount') {
            sortByAmount();
        }
    };

    render() {
        const { text, sortBy, startDate, endDate, calendarFocused } = this.props.filters;
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            type="text"
                            className="text-input"
                            placeholder="Search expenses" 
                            value={text}
                            onChange={this.onTextChange} 
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={sortBy}
                            onChange={this.onSortChange}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker 
                            startDate={startDate}
                            startDateId=""
                            endDate={endDate}
                            endDateId=""
                            onDatesChange={this.onDatesChange}
                            focusedInput={calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                </div>                   
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))    
}); 

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);