import React, { Component, Fragment } from 'react';

const LINKS = [
  { name: 'git', href: 'https://github.com/amostap' },
  { name: 'linkedin', href: 'https://www.linkedin.com/in/amostap' },
  { name: 'twitter', href: 'https://twitter.com/amostap' },
  { name: 'instagram', href: 'https://www.instagram.com/amostap' },
  { name: 'vk', href: 'https://vk.com/amostap' },
  { name: 'upwork', href: 'https://www.upwork.com/o/profiles/users/_~0180e11d0eaedb0e7c' },
  { name: 'skype', href: 'skype:amgibson94' },
  { name: 'email', href: 'mailto:alexandr.amostap@gmail.com?Subject=Hello%20World' }
];

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
    const { date } = this.state;

    return (
      <Fragment>
        <header className="header" style={ { color: `rgb(${date.getHours() * 10}, ${date.getMinutes() * 4}, ${date.getSeconds() * 4})` } }>
          <div>
            Hello World
            <span class="blinking-cursor">|</span>
          </div>
        </header>
        <footer className="footer">
          {
            LINKS.map(link => (
              <a className={link.name} target="_blank" href={link.href}>{link.name}</a>
            ))
          }
        </footer>
      </Fragment>
    );
  }
}
