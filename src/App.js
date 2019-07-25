import React from 'react';
import logo from './logo.svg';
import './App.css';

const setCookie = () => {
  console.log('setCookie');
  document.cookie = "SESSID=" + new Date() + ";expires=Fri, 31 Dec 9999 23:59:59 GMT; domain=.github.io; session=true";
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome on our App!</p>
        <a
          className="App-link"
          href="https://lathou.github.io/portfolio/app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to live-plateform
        </a>
        <br/><br/>
        <a
        className="App-link"
        onClick={setCookie}>
          Set a cookie
        </a>
      </header>
    </div>
  );
}

export default App;
