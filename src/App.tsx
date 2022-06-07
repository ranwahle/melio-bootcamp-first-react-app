import React from 'react';
import logo from './logo.svg';
import './App.css';
import Now from './Now';
import TaskComponent from './task';

const tasks = [
  {title: 'title', description: 'description', dueDate: new Date()},
  {title: 'title', description: 'description', dueDate: new Date()},
  {title: 'title', description: 'description', dueDate: new Date()}
]

class App extends React.Component {
  render() {
    return (<>
    <h1>Hello Melio, these are your tasks</h1>
    {tasks.map(task => <TaskComponent {...task} ></TaskComponent>)}
    </>)
  }
}

export default App;
