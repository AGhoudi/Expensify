import React, { Component } from 'react'

import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }; 
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({description});
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState({note});
    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({amount});
        }        
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState({createdAt});
        }        
    };

    onFocusChange = ({ focused }) => {
        this.setState({ calendarFocused: focused });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { description, amount, createdAt, note } = this.state;

        if (!description || !amount) {
            this.setState({ error: 'Please provide description and amount.' });
        } else {
            this.setState({ error: '' });
            this.props.onSubmit({
                description,
                amount: parseFloat(amount, 10) * 100,
                createdAt: createdAt.valueOf(),
                note
            });
        }
    }

    render() {
        const { description, note, amount, createdAt, calendarFocused, error } = this.state;
        return (                
                <form className="form" onSubmit={this.onSubmit}>
                    {error && <p className="form__error">{error}</p>}
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        className="text-input"
                        value={description}
                        onChange={this.onDescriptionChange} 
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        className="text-input"
                        value={amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={createdAt} 
                        onDateChange={this.onDateChange} 
                        focused={calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        className="textarea"
                        value={note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <div>
                        <button className="button">Save Expense</button>
                    </div>                    
                </form>           
        )
    }
}
