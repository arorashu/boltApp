import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TaskCard from './components/TaskCard/TaskCard';
import Quadrant from './components/Quadrant/Quadrant';
import Form from "./components/Form/Form";
import {
  Dialog,
  // DialogOverlay,
  // DialogContent
} from "@reach/dialog";




class App extends React.Component {

  constructor(props) {
    super(props);
    const allTasks = this.getFromStorage('allTasks');
    this.state = {allTasks};
  }


  render() {

    const allTasks = this.state.allTasks;
    let taskList = [];
    if(allTasks) {
      for(let taskName in allTasks) {
        taskList.push(<TaskCard name={taskName} onTaskDone={this.onTaskDone}/>)
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Bolt App
          </p>
        </header>
        <div name="grid" className="grid">
          <div className="important">
            <Quadrant>
              {taskList}
              {/* <TaskCard name="Do stuff"></TaskCard>
              <TaskCard name="Other stuff"></TaskCard> */}
              
            </Quadrant>
            {/* <vr/>
            <Quadrant>
              <TaskCard name="1"></TaskCard>
            </Quadrant>
          </div>
  
          <hr/>
          
          <div className="urgent">
            <Quadrant>
              <TaskCard name="3"></TaskCard>
            </Quadrant>
            <vr/>
            <Quadrant>
              <TaskCard name="4"></TaskCard>
            </Quadrant> */}
          </div>
        </div>
  
        <div className="action-panel">
          <Form onTaskAdd={this.onTaskAdd}></Form>
          
        </div>
        {/* <Dialog isOpen={true}>
          <p>Some Content</p>
        </Dialog> */}
      </div>
    );
  }

  onTaskAdd = (newTask) => {
    let allTasks = this.getFromStorage('allTasks');
    if (!allTasks) {
        allTasks = {};
    }
    allTasks[newTask.taskName] = newTask;
    this.addToStorage('allTasks', allTasks);
    this.setState({allTasks: allTasks});
  }

  onTaskDone = (doneTaskName) => {
    let allTasks = this.getFromStorage('allTasks');
    delete allTasks[doneTaskName];
    this.addToStorage('allTasks', allTasks);
    this.setState({allTasks: allTasks});
  }

  getFromStorage = (key) => {
    let value = localStorage.getItem(key);
    return JSON.parse(value);
  }

  addToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export default App;
