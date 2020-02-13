import React from 'react';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"login"} placeholder={"Login"} />
            </div>
            <div>
                <Field component={"input"} name={"password"} placeholder={"Password"} />
            </div>
            <div>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"} /> remember me
            </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const onSubmit = (formData) => {

}

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;