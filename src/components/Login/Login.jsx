import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from './../../utils/validators/validators';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Input}
                    name={"login"}
                    placeholder={"Login"}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name={"password"}
                    placeholder={"Password"}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    type={"checkbox"}
                    name={"rememberMe"} /> remember me
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
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;