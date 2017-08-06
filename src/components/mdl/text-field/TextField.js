import React, { Component } from 'react';
import { uid } from '../../../helpers/Utils';
import './TextField.css';

export default class TextInput extends Component {
    componentDidMount() {
        if ('componentHandler' in window)
            window.componentHandler.upgradeElement(this.wrapper);
    }

    get value() {
        return this.input.value;
    }
    
    render() {
        const classes = ['mdl-textfield', 'mdl-js-textfield'];
        if (this.props.floatingLabel) classes.push('mdl-textfield---floating-label');

        const id = uid();

        return (
            <div ref={el => this.wrapper = el} className={classes.join(' ')}>
                <input className="mdl-textfield__input"
                       type="text"
                       id={id}
                       pattern={this.props.pattern}
                       maxLength={this.props.maxLength}
                       value={this.props.value}
                       ref={el => this.input = el} />
                <label className="mdl-textfield__label" htmlFor={id}>{this.props.label}</label>
            </div>
        )
    }
}