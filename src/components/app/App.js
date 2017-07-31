import React, { Component } from 'react';
import TaskList from '../task-list/TaskList';
import TaskForm from '../task-form/TaskForm';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

const ASIDE = 'container-aside';
const MAIN = 'container-main';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentContainer: ASIDE
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <aside className="app__aside">
            <Route path="/" component={(props) => <TaskList {...props} />} />
          </aside>
          <main className="app__main">
            <Route path="/new-task" component={(props) => <TaskForm {...props} />} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
