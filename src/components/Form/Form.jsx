import React from 'react';
import './Form.css';

function Form(props) {

    return (
        <div className="form">
            <div>
                <div>What do you want to do?</div>
                <input id="taskName" type="text" />
            </div>
            <div>
                <div>Is it important?</div>
                <select name="" id="importance">
                    <option value={0}>na</option>
                    <option value={1}>very</option>
                </select>
            </div>
            <div>
                <div>Is it urgent?</div>
                <select name="" id="urgency">
                    <option value={0}>nope</option>
                    <option value={1}>yesyes</option>
                </select>
            </div>
            <div>
                <button onClick={function () {
                    addItem(props);
                }}>Add Item</button>
            </div>

        </div>
    );
}

function addItem(props) {
    const taskName = document.getElementById('taskName').value;
    const isImportant = document.getElementById('importance').value;
    const isUrgent = document.getElementById('urgency').value;
    const isDone = false;

    let task = { taskName, isImportant, isUrgent, isDone };
    props.onTaskAdd(task);
}


export default Form;
