import React from "react";
import './task.css';

export interface Task {
    title: string;
    description: string;
    dueDate: Date;
}

export default class TaskComponent extends React.Component<Task, any> {
    render() {
        return (<div className="container">
        <div>{this.props.title}</div>
        <div>{this.props.description}</div>
        <div>{this.props.dueDate.toDateString()} {this.props.dueDate.toTimeString()}</div>
        </div>)
    }
}