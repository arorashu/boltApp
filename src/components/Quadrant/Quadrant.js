import React from 'react';
import './Quadrant.css';

class Quadrant extends React.Component {
    render() {


        return (
            <div onClick={this.iWasClicked} className="task-list">
                <span><b>
                    {this.props.name}
                </b>
                </span>
                <div>
                    <ul>
                        {this.props.children}
                    </ul>
                </div>
            </div>
        );
    }

    iWasClicked = () => {
        this.props.onClick(this.props.id);
    }
}


export default Quadrant;
