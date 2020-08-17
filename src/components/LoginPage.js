import React from 'react';

import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <React.Fragment>
        <button onClick={startLogin}>Login</button>
    </React.Fragment>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);