import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/ToDoList";

class App extends Component {
  render() {
    return (
      <main className="container m-2">
        <TodoList />
      </main>
    );
  }
}

export default App;
