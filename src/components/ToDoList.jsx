import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import ToDoForms from "./ToDoForms";
import ToDo from "./ToDo";

class TodoList extends Component {
  state = {
    todos: []
  };

  addToDo = todo => {
    this.setState({
      todos: [...this.state.todos, todo]
    });
    console.log(todo);
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };
  render() {
    return (
      <div className="row">
        {/* <div className="col">
          <ToDoForms onSubmit={this.addToDo} />
        </div> */}

        <div
          className="col card text-white bg-info mb-3 m-2 "
          style={{ maxWidth: 400 }}
        >
          <div className="row">
            <div className="card-header font-weight-bold col">
              <i className="fa fa-th-list fa-x"> </i> TO-DO
            </div>
            <div className="card-header font-weight-bold col">
              Pending : {this.state.todos.filter(todo => !todo.complete).length}
            </div>
          </div>
          <div className="col">
            <ToDoForms onSubmit={this.addToDo} />
          </div>

          {this.state.todos.map((todo, i) => (
            <ToDo
              key={todo.id}
              todo={todo}
              //text={todo.text}
              number={i}
              toggleComplete={() => this.toggleComplete(todo.id)}
            />
            // <div key={todo.id} className="card-body">
            //   {i + 1 + ". " + todo.text}{" "}
            // </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;

//fontawesome icon size
//https://origin.fontawesome.com/how-to-use/on-the-web/styling/sizing-icons
