import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TaskCard from './components/TaskCard/TaskCard';
import Form from "./components/Form/Form";
import Grid from "./components/Grid/Grid";




class App extends React.Component {

  constructor(props) {
    super(props);
    const allTasks = this.getFromStorage('allTasks');
    const taskList = this.getTaskList(allTasks);
    this.appViews = {
      HOME: 1,
      CREATE_TASK: 2
    };
    this.state = {allTasks, taskList, view: this.appViews.HOME};
  }


  render() {
    // const taskList = this.state.taskList;

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Bolt App
          </p>
        </header>

      <Grid taskList={this.state.taskList}></Grid>

      <div><button onClick={this.addNewTask}>Add New Task!</button>
      </div>
  
      {(this.state.view == this.appViews.CREATE_TASK) && (
        <div className="action-panel">
          <button onClick={this.cancelAddTask}>Never Mind</button>
          <Form onTaskAdd={this.onTaskAdd}></Form>
        </div>
      )}
        
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
        if(task.isDone===true) continue;
        const isUrgent = parseInt(task.isUrgent);
        const isImportant = parseInt(task.isImportant);
        let quadrantList = taskList[isUrgent][isImportant];
        quadrantList.push(<TaskCard name={taskName} onTaskDone={this.onTaskDone}/>);
      }
    }

    return taskList;
  }

  // addTaskToTaskList(task) {
  //   let taskList = this.state.taskList;
  //   const isUrgent = parseInt(task.isUrgent);
  //   const isImportant = parseInt(task.isImportant);
  //   let quadrantList = taskList[isUrgent][isImportant];
  //   quadrantList.push(<TaskCard name={task.taskName} onTaskDone={this.onTaskDone}/>);
  //   return taskList;
  // }

  onTaskAdd = (newTask) => {
    let allTasks = this.getFromStorage('allTasks');
    if (!allTasks) {
        allTasks = {};
    }
    allTasks[newTask.taskName] = newTask;
    this.addToStorage('allTasks', allTasks);
    const taskList = this.getTaskList(allTasks);
    this.setState({allTasks: allTasks, taskList});
  }

  // removeFromTaskList(task) {
  //   let taskList = this.state.taskList;
  //   const isUrgent = parseInt(task.isUrgent);
  //   const isImportant = parseInt(task.isImportant);
  //   let quadrantList = taskList[isUrgent][isImportant];
  //   const elementToFind = <TaskCard name={task.taskName} onTaskDone={this.onTaskDone}/>;
  //   const indexToDelete = quadrantList.findIndex((element) => element===elementToFind);
  //   quadrantList.splice(indexToDelete, 1);
  //   return taskList;
  // }

  onTaskDone = (doneTaskName) => {
    let allTasks = this.getFromStorage('allTasks');
    allTasks[doneTaskName].isDone = true;
    const taskList = this.getTaskList(allTasks);
    this.addToStorage('allTasks', allTasks);
    this.setState({allTasks: allTasks, taskList});
  }

  addNewTask = () => {
    this.setState({view: this.appViews.CREATE_TASK});
  }

  cancelAddTask = () => {
    this.setState({view: this.appViews.HOME});
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
