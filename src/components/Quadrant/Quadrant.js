import React from 'react';
import './Quadrant.css';

class Quadrant extends React.Component {
    render() {


        return (
            <div className="task-list">
                <ul>
                    {this.props.children}
                </ul>
            </div>
          );
    }
}


export default Quadrant;
