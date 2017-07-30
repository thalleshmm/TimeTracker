import React, { Component } from 'react';
import Page from '../page/Page';
import Button from '../button/Button';
import Icon from '../icon/Icon';

export default class TaskList extends Component {
    render() {
        return (
            <Page title="Time Tracker">
                <Button fab colored ripple float>
                    <Icon>add</Icon>
                </Button>
            </Page>
        )
    }
}