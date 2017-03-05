import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          Hello World_
        </div>
        <div className="footer">
          <a target="_blank" href="https://github.com/amostap">git</a>
          <a target="_blank" href="https://www.linkedin.com/in/amostap/">linkedin</a>
          <a target="_blank" href="https://twitter.com/amostap">twitter</a>
          <a target="_blank" href="https://www.instagram.com/amostap/">instagram</a>
          <a target="_blank" href="https://vk.com/amostap">vk</a>
          <a target="_blank" href="skype:amgibson94">skype</a>
          <a href="mailto:alexandr.amostap@gmail.com?Subject=Hello%20again" target="_top">email</a>
        </div>
      </div>
    );
  }
}

export default App;
