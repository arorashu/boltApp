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
    this.state = {id: 1};
  }


  render() {
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
              <TaskCard name="Do stuff"></TaskCard>
              <TaskCard name="Other stuff"></TaskCard>
            </Quadrant>
            <vr/>
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
            </Quadrant>
          </div>
        </div>
  
        <div className="action-panel">
          <Form onSave={this.onElementAdd}></Form>
          
        </div>
        {/* <Dialog isOpen={true}>
          <p>Some Content</p>
        </Dialog> */}
      </div>
    );
  }

  onElementAdd = (allTasks) => {
    this.setState(allTasks);
  }
}

export default App;
