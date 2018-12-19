import React from "react";
import { Button } from "react-bootstrap";

export class SingleToDo extends React.Component {
  state = {
    countdown: 10
  };

  componentDidMount() {
    setInterval(() => {
      this.state.countdown > 0 ? this.setState({countdown: this.state.countdown - 1}) : this.setState({countdown: "overdue"});
    }, 1000)
  }

  render() {
    return (
      <li
        style={{
          listStyleType: "none",
          margin: 20
        }}
        key={this.props.keyNumber}
      >
        <Button
          bsStyle="danger"
          key={this.props.keyNumber}
          onClick={this.props.delete}
        >
          complete
        </Button>
        &nbsp;
        {this.props.todo} &nbsp; time left: { this.state.countdown }
      </li>
    );
  }
}
export default SingleToDo;
