import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ProjectModel from '../../models/Project';
import Page from '../page/Page';
import Button from '../mdl/button/Button';
import Icon from '../mdl/icon/Icon';
import './ProjectList.css';

export default class ProjectList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: ProjectModel.get()
        };

        ProjectModel.listen(this.updateProjects.bind(this));
    }

    updateProjects(projects) {
        this.setState({ projects });
    }

    newProject() {
        this.props.history.push('/new-project');
    }

    onListItemFocus(item) {
        item.classList.add('mdl-shadow--6dp');
    }

    onListItemBlur(item) {
        item.classList.remove('mdl-shadow--6dp');
    }

    render() {

        const listItems = this.state.projects.map(project => {
            return <NavLink exact
                    key={project.id}
                    to={'/project/' + project.id}
                    className="project-list__item mdl-card mdl-shadow--2dp"
                    activeClassName="project-list__item--active"
                    onBlur={evt => this.onListItemBlur(evt.target)}
                    onFocus={evt => this.onListItemFocus(evt.target)}>
                <div className="project-list__item__title">{project.name}</div>
                <div className="project-list__item__description">
                    {project.sprints.length} sprints
                </div>
            </NavLink>;
        });
        const list = <div className="project-list">{listItems}</div>;
        const noList = "You don't have any project.";

        return (
            <Page title="Time Tracker">
                {list.length === 0 ? noList : list}
                <Button fab colored ripple float onClick={this.newProject.bind(this)}>
                    <Icon>add</Icon>
                </Button>
            </Page>
        )
    }
}