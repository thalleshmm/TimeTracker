import React, { Component } from 'react';
import ProjectModel from '../../models/Project';
import Page from '../page/Page';
import TextInput from '../mdl/text-field/TextField';
import Button from '../mdl/button/Button';
import { uid } from '../../helpers/Utils';
import Icon from '../mdl/icon/Icon';
import './ProjectForm.css';

export default class ProjectForm extends Component {
    cancelDialog() {
        const detail = {
            title: 'Cancel new project',
            content: 'Are you sure you want to cancel this project?',
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
        this.props.history.push('/');
    }

    handleSubmit(evt) {
        evt.preventDefault();
        
        const description = this.descriptionInput.value.trim();
        if (description.length === 0) {
            const detail = {
                title: 'Error',
                content: 'Field \'description\' is empty.'
            };
            const event = new CustomEvent('dialog-open', { detail });
            window.dispatchEvent(event);
            return;
        }

        ProjectModel.insert({
            id: uid(),
            name: description,
            sprints: []
        });

        this.props.history.push('/');
    }

    render() {
        return (
            <Page title="New Project">
                <div className="container">
                    <form className="project-form-card mdl-card mdl-card mdl-shadow--2dp"
                          onSubmit={this.handleSubmit.bind(this)}>
                        <TextInput label="Description..."
                                   ref={el => this.descriptionInput = el} />
                        <div className="project-form-card__footer">
                            <Button submit accent ripple>Save</Button>
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