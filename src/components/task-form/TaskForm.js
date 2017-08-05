import React, { Component } from 'react';
import Page from '../page/Page';
import TextInput from '../mdl/text-field/TextField';
import Button from '../mdl/button/Button';
import Icon from '../mdl/icon/Icon';
import './TaskForm.css';

export default class TaskForm extends Component {
    render() {
        return (
            <Page title="New Task">
                <div className="container">
                    <form className="task-form-card mdl-card mdl-card mdl-shadow--2dp">
                        <TextInput label="Description..." />
                        <div className="task-form-card__footer">
                            <Button accent ripple>Save</Button>
                            <Button ripple>Cancel</Button>
                        </div>
                    </form>
                </div>
            </Page>
        )
    }
}