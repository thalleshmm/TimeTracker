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
        <Route path="/" component={props => {

          // When the screen is small (phone), we cannot show 
          // both containers simoutaniously. So We need to know the 
          // current pathname to decide which container is going to on focus.
          // If pathname is '/', we activate the aside container.
          // Otherwise, the main container should be activated.
          const { pathname } = props.location;
          const asideClasses = pathname === '/' ? 'app__aside app__aside--active' : 'app__aside';
          const asideTabIndex = pathname === '/' ? 0 : -1;
          const mainClasses = pathname !== '/' ? 'app__main app__main--active' : 'app__main';

          return (
            <div className="app">
              <aside className={asideClasses} tabIndex={asideTabIndex}>
                <Route path="/" component={(props) => <TaskList {...props} />} />
              </aside>
              <main className={mainClasses}>
                <Route exact path="/new-task" component={props => <TaskForm {...props} />} />
              </main>
            </div>
          )
        }} />
      </BrowserRouter>
    );
  }
}

export default App;
