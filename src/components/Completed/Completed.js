import React from "react";
import { Button } from "react-bootstrap";

const Completed = props => {
    return (
      <div>
        <li
          style={{
            listStyleType: "none",
            margin: 20
          }}
        >
          <Button bsStyle="success" onClick={props.delete}>
            clear
          </Button>
          &nbsp;
          {props.completedTasks}{" "}
        </li>
      </div>
    );
};

export default Completed;
