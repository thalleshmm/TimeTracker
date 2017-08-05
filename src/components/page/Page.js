import React, { Component } from 'react';
import { uid } from '../../helpers/Utils';
import './Page.css';

export default class Page extends Component {

    componentDidMount() {
        // If property 'aside' is not set, 
        // we focus on the title.  It means
        // that everytime the  main page 
        // changes, we will set the tab navigation 
        // starting point on the header
        if ( ! this.props.aside) {
            this.title.focus();
        }
    }

    render() {

        // Title should be wrapped inside
        // an h1 file except if prop aside is set.
        const title = React.createElement(this.props.aside ? 'span' : 'h1', {
            ref: el => this.title = el,
            className: 'mdl-layout-tile page__header',
            tabIndex: -1
        }, this.props.title);
        
        const menuButtonId = uid();
        const menuButton = <button className="mdl-button mdl-js-button mdl-button--icon" uid={menuButtonId}>
            <i className="material-icons">more_vert</i>
        </button>;
        const menu = <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" forHTML={menuButtonId}>
            {this.props.menu}
        </ul>;

        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-drawer-button">
                <div className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        {title}
                        <div className="mdl-layout-spacer"></div>
                        {this.props.menu ? menuButton : ''}
                    </div>
                </div>
                <main className="mdl-layout__content">
                    {this.props.children}
                </main>
            </div>
        )
    }
}