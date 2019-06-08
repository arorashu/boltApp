import React from 'react';
import './Task.css';

function TaskCard(props) {
  return (
    <div className="task-card">
        <div>{props.name}</div>
        <div><button onClick={() => {props.onTaskDone(props.name)}}>&#10003;</button></div>
    </div>
  );
}

export default TaskCard;
