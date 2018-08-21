// import React from 'react';
// import {Field, reduxForm, focus} from 'redux-form';
// import {registerUser} from '../actions/RegisterUser';
// import {login} from '../actions/auth';
// import Input from './input';
// import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
// const passwordLength = length({min: 10, max: 72});
// const matchesPassword = matches('password');


import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/topics" />;
    }
    return (
        <div className="home">
            <h2>Register for Foo App</h2>
            <RegistrationForm />
            <Link to="/">Login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);