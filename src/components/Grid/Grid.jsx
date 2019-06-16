import React from 'react';
import Quadrant from '../Quadrant/Quadrant';
// import './Task.css';

function Grid(props) {
    const taskList = props.taskList;
    return (
        <div name="grid" className="grid">
            <div className="urgent">
                <Quadrant name="Urgent" onClick={heWasClicked} id="1000">
                    {taskList[1][0]}
                </Quadrant>
                <vr />
                <Quadrant name="Urgent and Important!">
                    {taskList[1][1]}
                </Quadrant>
            </div>

            <hr />

            <div className="important">
                <Quadrant name="">
                    {taskList[0][0]}
                </Quadrant>
                <vr />
                <Quadrant name="Important!">
                    {taskList[0][1]}
                </Quadrant>
            </div>
        </div>
    );
}

function heWasClicked(id) {
    console.log('bla bla bla ' + id);
}

export default Grid;
