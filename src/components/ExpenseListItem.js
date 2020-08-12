import React from 'react';

import { Link } from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <React.Fragment>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>        
        <p>{amount} - {createdAt}</p>
    </React.Fragment>
);

export default ExpenseListItem;