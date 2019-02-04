import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import shortid from "shortid";

class ToDoForms extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    //submit form
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div className="m-2">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                name="text"
                value={this.state.text}
                placeholder="activity.."
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="col">
              <button onClick={this.handleSubmit} className="btn btn-light">
                add
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ToDoForms;
