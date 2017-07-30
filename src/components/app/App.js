import React, { Component } from 'react';
import TaskList from '../task-list/TaskList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <aside className="app__aside">
          <TaskList />
        </aside>
      </div>
    );
  }
}

export default App;
