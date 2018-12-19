import React from "react";
import "./CreateToDo.css";
import SingleToDo from "../SingleToDo/SingleToDo";
import Completed from "../Completed/Completed";
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Collapse,
  Well
} from "react-bootstrap";

export class CreateToDo extends React.Component {
  state = {
    todos: [],
    currentTodo: "",
    completedTasks: [],
    completedTask: ""
  };
  
  onInputChange = event => {
    this.setState({ currentTodo: event.target.value });
  };

  onClick = e => {
    e.preventDefault();
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);

    this.setState({ todos: todosCopy, currentTodo: "" });
  };

  deleteTodo = index => {
    let newarr = this.state.todos.slice();
    newarr.splice(index, 1);

    this.setState({ todos: newarr, currentTodo: "" });
  };

  moveToComplete = index => {
    let completed = this.state.todos[index];
    let completedTasks = this.state.completedTasks;
    completedTasks.push(completed);
    this.setState({
      completedTasks: completedTasks,
      completedTask: "",
      currentTodo: ""
    });
    this.deleteTodo(index);
  };

  clearCompleted = index => {
    let newarr = this.state.completedTasks.slice();
    newarr.splice(index, 1);

    this.setState({ completedTasks: newarr, currentTodo: "" });
  };

  getValidationState() {
    const length = this.state.currentTodo.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  getLengthMessage() {
    const length = this.state.currentTodo.length;
    if (length >= 10) return null;
    else if (length === "") return null;
    else {
      return "Todo must be greater than 10 characters";
    }
  }

  render() {
    let bullets = this.state.todos.map((value, index) => {
      return (
        <SingleToDo
          style={{ TextAlign: "left" }}
          todo={value}
          keyNumber={index}
          key={index}
          delete={() => this.moveToComplete(index)}
        />
      );
    });

    let completedTasks = this.state.completedTasks.map((value, index) => {
      return (
        <Completed
          completedTasks={value}
          delete={() => this.clearCompleted(index)}
        />
      );
    });

    return (
      <div className="addbar">
        <form>
          <FormGroup validationState={this.getValidationState()}>
            <ControlLabel>Enter A ToDo</ControlLabel>
            <br />

            <FormControl
              bsSize="sm"
              placeholder="Enter todo"
              value={this.state.currentTodo}
              onChange={this.onInputChange}
            />
            <br />

            <Collapse
              in={
                this.state.currentTodo.length > 1 &&
                this.state.currentTodo.length < 10
                  ? true
                  : false
              }
            >
              <div>
                <HelpBlock>{this.getLengthMessage()}</HelpBlock>
              </div>
            </Collapse>

            <Button
              type="submit"
              disabled={this.state.currentTodo.length < 10}
              bsStyle="success"
              onClick={this.onClick}
              className="btn"
            >
              add!
            </Button>
          </FormGroup>
        </form>

        <Well>
          {this.state.todos.length === 0 ? (
            "No Todos Yet!"
          ) : (
            <ul> {bullets} </ul>
          )}
        </Well>
        <br />
        <br />
        <br />
        <h1 style={{ textAlign: "left" }}> Completed Tasks </h1>
        <Well>
          {this.state.completedTasks.length === 0 ? (
            "No Completed Tasks Yet!"
          ) : (
            <ul> {completedTasks} </ul>
          )}
        </Well>
      </div>
    );
  }
}
export default CreateToDo;
