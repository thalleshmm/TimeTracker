import React, { Component } from 'react';
import Page from '../page/Page';
import TextInput from '../mdl/text-field/TextField';
import Button from '../mdl/button/Button';
import Icon from '../mdl/icon/Icon';
import './TaskForm.css';

export default class TaskForm extends Component {
    cancelDialog() {
        const detail = {
            title: 'Cancel new task',
            content: 'Are you sure you want to cancel this task?',
            buttons: [
                <Button key="1" accent onClick={this.cancelDialogAgree.bind(this)}>Yes</Button>,
                <Button key="0" onClick={this.cancelDialogClose.bind(this)}>No</Button>
            ]
        };

        const event = new CustomEvent('dialog-open', { detail });
        window.dispatchEvent(event);
    }

    cancelDialogClose() {
        const event = new Event('dialog-close');
        window.dispatchEvent(event);
    }

    cancelDialogAgree() {
        this.cancelDialogClose();
        this.history.push('/');
    }

    render() {
        return (
            <Page title="New Task">
                <div className="container">
                    <form className="task-form-card mdl-card mdl-card mdl-shadow--2dp">
                        <TextInput label="Description..." />
                        <div className="task-form-card__footer">
                            <Button accent ripple>Save</Button>
                            <Button ref={el => this.cancelButton = el}
                                    onClick={this.cancelDialog.bind(this)}
                                    ripple>Cancel</Button>
                        </div>
                    </form>
                </div>
            </Page>
        )
    }
}