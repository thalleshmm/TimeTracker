import React, { Component } from 'react';
import Page from '../page/Page';
import Button from '../button/Button';
import Icon from '../icon/Icon';

export default class TaskList extends Component {

    newTask() {
        this.props.history.push('/new-task');
    }

    render() {
        return (
            <Page title="Time Tracker">
                <Button fab colored ripple float onClick={this.newTask.bind(this)}>
                    <Icon>add</Icon>
                </Button>
            </Page>
        )
    }
}