import React from "react";
import { BrowserRouter, Link, Route  } from "react-router-dom";
import { Button, InputGroup, FormControl, Container, Form, Col } from 'react-bootstrap';

import DateEditor from "react-tabulator/lib/editors/DateEditor";
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";
import MultiSelectEditor from "react-tabulator/lib/editors/MultiSelectEditor";

import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import "bootstrap/dist/css/bootstrap.min.css";

import "./task.css";

// for React 16.4.x use: import { ReactTabulator } - example in github repo.
import { React15Tabulator, reactFormatter } from "react-tabulator"; // for React 15.x

function SimpleButton(props) {
  const rowData = props.cell._cell.row.data;
  const cellValue = props.cell._cell.value || "Edit | Show";
  return <button onClick={() => alert(rowData.name)}>{cellValue}</button>;
}

const data = [
  {
    id: 327498,
    task: "",
    assignee: "",
    duedate: "",
    status: "",
  },
  {
    id: 327498,
    task: "Create sign-in page",
    assignee: "Michael",
    duedate: "Jun 17",
    status: "New",
  },
  {
    id: 23,
    task: "New Contact",
    assignee: "",
    duedate: "Jun 18",
    status: "New",
  },
  {
    id: 2342,
    task: "List Contacts",
    assignee: "Jane",
    duedate: "Jun 18",
    status: "Assess",
  },
  {
    id: 123,
    task: "Edit Contact",
    assignee: "Jane",
    duedate: "Jun 18",
    status: "Assess",
  },
  {
    id: 543,
    task: "Contact Details",
    assignee: "",
    duedate: "Jun 18",
    status: "New",
  },
  {
    id: 23712,
    task: "New Task",
    assignee: "",
    duedate: "Jun 19",
    status: "New",
  },
  {
    id: 1233,
    task: "List Tasks",
    assignee: "",
    duedate: "Jun 19",
    status: "New",
  },
  {
    id: 423,
    task: "Edit Task",
    assignee: "",
    duedate: "Jun 19",
    status: "New",
  },
  {
    id: 4362,
    task: "Task Details",
    assignee: "",
    duedate: "Jun 19",
    status: "New",
  },
  {
    id: 235,
    task: "Reply to task",
    assignee: "",
    duedate: "Jun 19",
    status: "New",
  },
];

const ContactLink = (props) => {
  const rowData = props.cell._cell.row.data;
  const cellValue = props.cell._cell.value;
  return <a href="/taskdetails">{cellValue}</a>
};

class TaskGridView extends React.Component {
  state = {
    data: [],
    selectedName: "",
  };
  ref = null;

  columns = [
    { title: "Id", field: "id", width: 150 },
    { title: "Task", field: "task", hozAlign: "left", formatter: reactFormatter(<ContactLink />) },
    { title: "assignee", field: "assignee" },
    { title: "due date", field: "duedate" },
    { title: "status", field: "status", hozAlign: "center", hozAlign: "left" },
  ];

  setData = () => {
    this.setState({ data });
  };

  clearData = () => {
    this.setState({ data: [] });
  };

  render() {
    const options = {
      height: 150,
      movableRows: true,
    };

    return (
      <div>
        <div>
          <Container>
            <div>
              <span className="float-right">
                {" "}
                <Button variant="light">New Task</Button>{" "}
              </span>
              <h3>Tasks</h3>
            </div>
            <br />
          </Container>
          <Container className="well-white">
            <br />
            <Form.Row>
              <Col>
                <InputGroup className="mb-2 mr-sm-2">
                  <FormControl
                    placeholder="Search tasks"
                    aria-label="Search tasks"
                  />
                  <InputGroup.Append>
                    <Button variant="outline-secondary">Search</Button>
                  </InputGroup.Append>
                </InputGroup>
                <br />
                <div>
                  <>
                    <Button variant="outline-primary">Incomplete Tasks</Button>{" "}
                    <Button variant="outline-secondary">Priority</Button>{" "}
                    <Button variant="outline-success">Assigned</Button>{" "}
                    <Button variant="link">All filters</Button>
                  </>
                </div>
              </Col>
              <Col></Col>
            </Form.Row>
            <br />
            <React15Tabulator
              ref={(ref) => (this.ref = ref)}
              columns={this.columns}
              data={data}
              data-custom-attr="test-custom-attribute"
              className="custom-css-class"
            />
            <br />
            <br />
          </Container>
        </div>
      </div>
    );
  }
}

export default TaskGridView;
