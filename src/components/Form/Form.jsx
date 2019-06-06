import React from 'react';
import './Form.css';

function Form(props) {
  return (
    <div className="form">
        <div>
            <div>What do you want to do?</div>
            <input id="taskName" type="text"/>
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
    </div>
  );
}

export default Form;
