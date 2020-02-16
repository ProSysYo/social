import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from './../../common/FormsControls/FormsControls';
import { required } from './../../../utils/validators/validators';


const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name="newPostText"
                validate={[required, maxLength10]}
            />            
            <div>
                <button>Add post</button>
            </div>
        </form>
    )    
}

export default reduxForm({form: "dialog-add-message-form"})(AddNewPostForm);  ;