import React, { ChangeEvent } from 'react';
import './App.css';
import Task, { TaskData } from './Task';

const tasks: TaskData[] = [
  {title: 'Make tas component', description: 'Make tas component', dueDate: new Date() },

  {title: 'Make tas component', description: 'Make tas component', dueDate: new Date() },

 {title: 'Make tas component', description: 'Make tas component', dueDate: new Date() }
]

class App extends React.Component<any, {tasks: TaskData[], searchText: string}> {

  componentWillMount() {
    this.setState({tasks});
  }

  textChanged = (evt: ChangeEvent<HTMLInputElement>) => {
      this.setState({searchText: evt.target.value})
  }
  render() {
    const {searchText} = this.state;
    return (<>
    <h1>Tasks:</h1>
    <input type="text" onChange={this.textChanged}></input>
    {
      this.state.tasks.filter( t => !searchText || t.description.includes(searchText) || t.title.includes(searchText) ).map((task, index) =>  <div  className='task-row'><Task key={index} title={task.title} description={task.description} dueDate={task.dueDate} ></Task></div>)
    }
      </>)
  }
}

export default App;
