import React, { Component } from 'react';
import { uid } from '../../../helpers/Utils';
import './TextField.css';

export default class TextInput extends Component {
    componentDidMount() {
        if ('componentHandler' in window)
            window.componentHandler.upgradeElement(this.element);
    }
    
    render() {
        const classes = ['mdl-textfield', 'mdl-js-textfield'];
        if (this.props.floatingLabel) classes.push('mdl-textfield---floating-label');

        const id = uid();

        return (
            <div ref={element => this.element = element} className={classes.join(' ')}>
                <input className="mdl-textfield__input"
                       type="text"
                       id={id}
                       pattern={this.props.pattern}
                       maxLength={this.props.maxLength}
                       value={this.props.value} />
                <label className="mdl-textfield__label" htmlFor={id}>{this.props.label}</label>
            </div>
        )
    }
}