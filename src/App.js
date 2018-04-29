import React, { Fragment } from 'react';

const LINKS = [
  { name: 'github', href: 'https://github.com/amostap' },
  { name: 'linkedin', href: 'https://www.linkedin.com/in/amostap' },
  { name: 'twitter', href: 'https://twitter.com/amostap' },
  { name: 'codewars', href: 'https://www.codewars.com/users/amostap' },
  { name: 'instagram', href: 'https://www.instagram.com/amostap' },
  { name: 'vk', href: 'https://vk.com/amostap' },
  { name: 'upwork', href: 'https://www.upwork.com/o/profiles/users/_~0180e11d0eaedb0e7c' },
  { name: 'skype', href: 'skype:amgibson94' },
  { name: 'email', href: 'mailto:alexandr.amostap@gmail.com?Subject=Hello%20World' }
];

const App = () => (
  <Fragment>
    <header className="header">
      <div>
        Hello World
        <span className="blinking-cursor">|</span>
      </div>
    </header>
    <footer className="footer">
      {
        LINKS.map((link, index) => (
          <a key={index} className={link.name} target="_blank" href={link.href}>{link.name}</a>
        ))
      }
    </footer>
  </Fragment>
);

export default App;
