import React from 'react';

import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    
    onSubmit = (expense) => {
        const { addExpense, history } = this.props;
        addExpense(expense);
        history.push('/');
    }

    render() {
        return (
            <React.Fragment>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(null, mapDispatchToProps)(AddExpensePage);