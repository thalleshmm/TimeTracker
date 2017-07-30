import { uid } from '../helpers/Utils';

class Task {
    constructor() {
        this._tasks = this._getFromStorage();
        this._listeners = [];
    }

    get() {
        return [...this._tasks];
    }

    insert(data = {
        id: uid(),
        name: '',
        sprints: []
    }) {
        this._tasks.push(data);
        this._changed();   
    }

    update(updatedTask) {
        this._tasks.forEach((task, index) => {
            if (task.id === updatedTask.id) {
                this._tasks[index] = updatedTask;
            }
        });
        this._changed();
    }

    delete(targetTask) {
        this._tasks.forEach((task, index) => {
            if (task.id === targetTask.id) {
                this._tasks.splice(index, 1);
            }
        });
        this._changed();
    }

    listen(fn) {
        this._listeners.push(fn);
    }

    _changed() {
        this._saveInStorage(this._tasks);
        this._listeners.forEach(listener => listener(this.get()));
    }

    _getFromStorage() {
        let data = localStorage.getItem('tasks');
        if (!data) data = [];
        return JSON.parse(data);
    }

    _saveInStorage(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

export default new Task();