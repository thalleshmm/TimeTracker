import { uid } from '../helpers/Utils';

class Project {
    constructor() {
        this._projects = this._getFromStorage();
        this._listeners = [];
    }

    get() {
        return [...this._projects];
    }

    insert(data = {
        id: uid(),
        name: '',
        sprints: []
    }) {
        this._projects.push(data);
        this._changed();   
    }

    update(updatedProject) {
        this._projects.forEach((project, index) => {
            if (project.id === updatedProject.id) {
                this._projects[index] = updatedProject;
            }
        });
        this._changed();
    }

    delete(targetProject) {
        this._projects.forEach((project, index) => {
            if (project.id === targetProject.id) {
                this._projects.splice(index, 1);
            }
        });
        this._changed();
    }

    listen(fn) {
        this._listeners.push(fn);
    }

    _changed() {
        this._saveInStorage(this._projects);
        this._listeners.forEach(listener => listener(this.get()));
    }

    _getFromStorage() {
        let data = window.localStorage.getItem('projects');
        if (!data) return [];
        return JSON.parse(data);
    }

    _saveInStorage(projects) {
        window.localStorage.setItem('projects', JSON.stringify(projects));
    }
}

export default new Project();