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
                    <option>na</option>
                    <option>very</option>
                </select>
            </div>
            <div>
                <div>Is it urgent?</div>
                <select name="" id="urgency"></select>
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
    let taskName = document.getElementById('taskName').value;
    let importance = document.getElementById('importance').value;
    let urgency = document.getElementById('urgency').value;

    let task = { taskName, importance, urgency };
    props.onTaskAdd(task);
}


function getFromStorage(key) {
    let value = localStorage.getItem(key);
    return JSON.parse(value);
}

export default Form;
