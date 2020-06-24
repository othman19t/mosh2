import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { store } from "./containers/store";
store.dispatch({ type: "BUG_ADDED", payload: { description: "bug 1" } });
store.dispatch({ type: "BUG_REMOVED", payload: { id: 1 } });

function App() {
  console.log(store.getState());

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
