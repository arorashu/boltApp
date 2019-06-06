import React from 'react';
import './Task.css';

function TaskCard(props) {
  return (
    <React.Fragment className="task-card">
        <div>{props.name}</div>
        <div><button>Done!</button></div>
    </React.Fragment>
  );
}

export default TaskCard;
