import React, { Component } from "react";

const ToDo = props => {
  return (
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : "",
        cursor: "pointer"
      }}
      onClick={props.toggleComplete}
      className="card-body"
    >
      {props.number + 1 + ". " + props.todo.text}
    </div>
  );
};

export default ToDo;
