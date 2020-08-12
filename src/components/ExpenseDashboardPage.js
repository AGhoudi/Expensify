import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <React.Fragment>
        <ExpenseListFilters />
        <ExpenseList />
    </React.Fragment>
);

export default ExpenseDashboardPage;