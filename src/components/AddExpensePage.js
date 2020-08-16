import React from 'react';

import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    
    onSubmit = (expense) => {
        const { startAddExpense, history } = this.props;
        startAddExpense(expense);
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
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(null, mapDispatchToProps)(AddExpensePage);