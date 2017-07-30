import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
    render() {
        let classes = ['mdl-button', 'mdl-js-button'];

        if (this.props.colored) classes.push('mdl-button--colored');
        if (this.props.fab) classes.push('mdl-button--fab');
        if (this.props.ripple) classes.push('mdl-js-ripple-effect');
        if (this.props.raised) classes.push('mdl-button--raised');
        if (this.props.accent) classes.push('mdl-button--accent');
        if (this.props.primary) classes.push('mld-button--primary');
        if (this.props.icon) classes.push('mdl-button--icon');
        if (this.props.mini) classes.push('mdl-button--mini-fab');
        if (this.props.float) classes.push('mdl-button--float');
        if (this.props.floatAbove) classes.push('mdl-button--float-above');

        let attrs = {
            disabled: this.props.disabled
        };

        return (
            <button {...attrs}
                    className={classes.join(' ')}
                    onClick={this.props.onClick ? this.props.onClick() : ''}>
                {this.props.children}
            </button>
        )
    }
}