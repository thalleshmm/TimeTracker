import React, { Component } from 'react';
import dialogPolyfill from 'dialog-polyfill/dialog-polyfill';
import Button from '../button/Button';
import 'dialog-polyfill/dialog-polyfill.css';
import './Dialog.css';

export default class Dialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: null,
            content: null,
            onAgree: null,
            buttons: <Button ripple colored onClick={this.close.bind(this)} />
        };

        window.addEventListener('dialog-open', this.open.bind(this));
        window.addEventListener('dialog-close', this.close.bind(this));
    }

    componentDidMount() {
        if ( ! this.dialog.showModal)
            dialogPolyfill.registerDialog(this.dialog);
    }

    open({ detail }) {
        this.setState({
            title: detail.title,
            content: detail.content
        });

        if (detail.onAgree) {
            this.setState({ onAgree: detail.onAgree });
        }

        if (detail.buttons) {
            this.setState({ buttons: detail.buttons });
        }

        this.dialog.showModal();
    }

    close() {
        this.dialog.close();
        if (this.state.onAgree) this.state.onAgree();
    }

    render() {
        return <dialog ref={el => this.dialog = el} className="mdl-dialog">
            <h4 className="mdl-dialog__title">{this.state.title}</h4>
            <div className="mdl-dialog__content">{this.state.content}</div>
            <div className="mdl-dialog__actions">
                {this.state.buttons}
            </div>
        </dialog>;
    }
}