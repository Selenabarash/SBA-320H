import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import BeerList from './components/BeerList';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1>Beer Explorer</h1>
      <BeerList />
    </div>
  </Provider>
);

export default App;

