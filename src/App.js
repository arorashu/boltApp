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
    const taskList = this.getTaskList(allTasks);
    this.state = {allTasks, taskList};
  }


  render() {
    const taskList = this.state.taskList;

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Bolt App
          </p>
        </header>
        <div name="grid" className="grid">
          <div className="urgent">
            <Quadrant>
              {taskList[1][0]}
            </Quadrant>
            <vr/>
            <Quadrant>
              {taskList[1][1]}
            </Quadrant>
          </div>
  
          <hr/>
          
          <div className="important">
            <Quadrant>
              {taskList[0][0]}
            </Quadrant>
            <vr/>
            <Quadrant>
              {taskList[0][1]}
            </Quadrant>
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

  getTaskList(allTasks) {
    let taskList = [];
    taskList[0] = [];
    taskList[1] = [];
    taskList[0][0] = [];
    taskList[0][1] = [];
    taskList[1][1] = [];
    taskList[1][0] = [];

    if(allTasks) {
      for(let taskName in allTasks) {
        const task = allTasks[taskName];
        const isUrgent = parseInt(task.isUrgent);
        const isImportant = parseInt(task.isImportant);
        let quadrantList = taskList[isUrgent][isImportant];
        quadrantList.push(<TaskCard name={taskName} onTaskDone={this.onTaskDone}/>);
      }
    }

    return taskList;
  }

  addTaskToTaskList(task) {
    let taskList = this.state.taskList;
    const isUrgent = parseInt(task.isUrgent);
    const isImportant = parseInt(task.isImportant);
    let quadrantList = taskList[isUrgent][isImportant];
    quadrantList.push(<TaskCard name={task.taskName} onTaskDone={this.onTaskDone}/>);
    return taskList;
  }

  onTaskAdd = (newTask) => {
    let allTasks = this.getFromStorage('allTasks');
    if (!allTasks) {
        allTasks = {};
    }
    allTasks[newTask.taskName] = newTask;
    this.addToStorage('allTasks', allTasks);
    const taskList = this.addTaskToTaskList(newTask);
    this.setState({allTasks: allTasks, taskList});
  }

  onTaskDone = (doneTaskName) => {
    let allTasks = this.getFromStorage('allTasks');
    allTasks[doneTaskName].isDone = true;
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
