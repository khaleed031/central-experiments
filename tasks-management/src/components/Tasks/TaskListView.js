import React from "react";
import { BrowserRouter, Link, Route  } from "react-router-dom";

import { Button, InputGroup, FormControl, Container, Form, Col, DropdownButton, Dropdown } from 'react-bootstrap';

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

const dataList = [
  {
    id: 327498,
    task: "Create sign-in page",
    description: "The purpose of the sign-in page is to allow an entry page where the user is authenticated. If a",
    assignee: "Michael",
    reportedby : "Acme Inc - Jane Doe",
    priority: "Normal",
    status: "New",
    duedate : "2020/06/19  5:00 pm"
  },
  {
    id: 23,
    task: "New Contact",
    description: "New contact have been added to allow an entry page where the user is authenticated.",
    assignee: "Michael",
    reportedby : "Acme Inc - Jane Doe",
    priority: "Normal",
    status: "New",
    duedate : "2020/06/19  5:00 pm"
  }
];

const listItems = dataList.map((data) =>
  <div>
    <div><input type="checkbox" /> {data.id} {data.task}</div>
    <br/>
    <p>{data.description}</p>
    <br/>
    <table className="table">
        <tr>
            <td>Assignee</td>
            <td>Reported by</td>
            <td>Priority</td>
            <td>Status</td>
            <td>Due Date</td>
        </tr>
        <tr>
            <td><a href="/taskdetails">{data.assignee}</a></td>
            <td>{data.reportedby}</td>
            <td>{data.priority}</td>
            <td>{data.status}</td>
            <td>{data.duedate}</td>
        </tr>
    </table>
  </div>
  
);

class TaskListView extends React.Component {
  render() {

    return (
      <div>
        <div>
          <Container>
            <div>
              <span className="float-right">
                <a href="#" className="cls_book"><img src="images/book.jpg" /></a>
                <Button variant="outline-dark">New Task</Button>
                <Link to="/tasklistview"><img src="images/ellipse-v.jpg" /></Link>
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
              </Col>
              <Col></Col>
            </Form.Row>
            <br/>
            <Form.Row>
                <Col>
                <div>
                  <>
                    <Button variant="outline-primary">Incomplete Tasks</Button>{" "}
                    <Button variant="outline-secondary">Priority</Button>{" "}
                    <Button variant="outline-success">Assigned</Button>{" "}
                    <Button variant="link">All filters</Button>
                  </>
                </div>
                </Col>
            </Form.Row>
            <br />
          </Container>
          <br />
          <Container className="well-white">
            <br />
            {listItems}
          </Container>
        </div>
      </div>
    );
  }
}

export default TaskListView;
