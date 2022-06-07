import React from 'react';
import logo from './logo.svg';
import './App.css';
import Now from './Now';

class App extends React.Component {
  render() {
    return (<>
    <h1>Hello Melio</h1>
    <Now now={new Date()}></Now>
    </>)
  }
}

export default App;
