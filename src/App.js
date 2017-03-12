import React from 'react';
import './App.css';

export default class App extends Component {
  state = {
    date: new Date()
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="App">
        <div className="main" style={ { color: `rgb(255, 255, ${this.state.date})` } }>
          Hello World_
        </div>
        <div>{ this.state.date.toLocaleTimeString() }</div>
        <footer className="footer">
          <a className="git" target="_blank" href="https://github.com/amostap">git</a>
          <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/amostap">linkedin</a>
          <a className="twitter" target="_blank" href="https://twitter.com/amostap">twitter</a>
          <a className="instagram" target="_blank" href="https://www.instagram.com/amostap">instagram</a>
          <a className="vk" target="_blank" href="https://vk.com/amostap">vk</a>
          <a className="upwork" target="_blank" href="https://www.upwork.com/o/profiles/users/_~0180e11d0eaedb0e7c">upwork</a>
          <a className="skype" target="_blank" href="skype:amgibson94">skype</a>
          <a className="email" href="mailto:alexandr.amostap@gmail.com?Subject=Hello%20World" target="_top">email</a>
        </footer>
      </div>
    );
  }
}
