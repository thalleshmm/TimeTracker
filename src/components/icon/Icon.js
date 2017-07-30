import React, { Component } from 'react';

export default class Icon extends Component {
    render() {
        return <i className="material-icons">{this.props.children}</i>
    }
}