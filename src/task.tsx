import React from "react";
import './task.css';

export interface Task {
    title: string;
    description: string;
    dueDate: Date | null;
}

export default class TaskComponent extends React.Component<Task, Task> {
   
    shouldComponentUpdate(props: Task, state1: Task, state2: Task) {
        console.log('You shouldn\'t update');
        return false;
    }

    deleteDueDate = () => {
        this.setState({...this.state, dueDate: null})
    }

    componentWillMount() {
        this.state = {...this.props};
    }

    render() {
       
        return (<div className="container">
        <div>{this.state.title}</div>
        <div>{this.state.description}</div>
        <div>{this.state.dueDate?.toDateString()} {this.state.dueDate?.toTimeString()}</div>
        <div>
            <button onClick={this.deleteDueDate} >Delete Due Date</button>
        </div>
        </div>)
    }
}