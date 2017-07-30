import React, { Component } from 'react';
import { uid } from '../../helpers/Utils';

export default class Page extends Component {
    render() {
        const menuButtonId = uid();
        const menuButton = <button className="mdl-button mdl-js-button mdl-button--icon"
                                   uid={menuButtonId}>
            <i className="material-icons">more_vert</i>
        </button>;
        const menu = <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                         forHTML={menuButtonId}>
                            {this.props.menu}
                     </ul>;

        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-drawer-button">
                <div className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">{this.props.title}</span>
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