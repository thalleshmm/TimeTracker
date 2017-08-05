import React, { Component } from 'react';
import Page from '../page/Page';
import Button from '../mdl/button/Button';
import Icon from '../mdl/icon/Icon';

export default class ProjectList extends Component {

    newProject() {
        this.props.history.push('/new-project');
    }

    render() {
        return (
            <Page title="Time Tracker">
                <Button fab colored ripple float onClick={this.newProject.bind(this)}>
                    <Icon>add</Icon>
                </Button>
            </Page>
        )
    }
}