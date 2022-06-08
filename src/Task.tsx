import { Component, SyntheticEvent } from "react";

export interface TaskData {
    title: string;
    description: string;
    dueDate: Date;
}

export interface TaskState {
    done: boolean;
}

export default class Task extends Component<TaskData, TaskState> {

    componentWillMount() {
        this.setState( {
            done: false
        });
    }

    componentDidMount() {
        console.log('component mounted', this.state);
    }

    toggleStatus =  (evt: any) => {
        console.log(evt);
       this.setState({ done: evt.target.value});
       // this.state.done = !this.state.done;
    }

    shouldComponentUpdate(nextProp: TaskData, nextState: TaskState) : boolean {
         return nextState.done !== this.state.done;
        // return false;
    }

    componentDidUpdate() {
        console.log('Task updated', this.state);
    }
    render() {
        const {title, description, dueDate} = this.props;
        return (
            <>
            <div>
                {title}
            </div>
            <div>
                {description}
            </div>
            <div>
                {dueDate.toDateString()}
            </div>
            <div>
                <input type="checkbox" defaultChecked={this.state.done} onChange={this.toggleStatus}></input>
            </div>
            </>
        )
    }
}