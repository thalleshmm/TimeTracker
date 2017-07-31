import React, { Component } from 'react';
import Page from '../page/Page';
import Button from '../button/Button';
import Icon from '../icon/Icon';

export default class TaskForm extends Component {
    render() {
        return (
            <Page title="New Task">
                <Button fab colored ripple float><Icon>save</Icon></Button>
            </Page>
        )
    }
}