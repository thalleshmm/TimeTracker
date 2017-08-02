import React, { Component } from 'react';
import Page from '../page/Page';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import './TaskForm.css';

export default class TaskForm extends Component {
    componentDidMount() {
        this.descriptionInput.focus();
    }

    render() {
        return (
            <Page title="New Task">
                <div className="container">
                    <form className="task-form-card mdl-card mdl-card mdl-shadow--2dp">
                        <div className="task-form-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input ref={input => this.descriptionInput = input} className="mdl-textfield__input" type="text" id="description" />
                            <label className="mdl-textfield__label" htmlFor="description">Description...</label>
                        </div>
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