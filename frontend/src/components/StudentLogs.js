import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class StudentLogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      subject: "",
      classDuaration: 0,
      date: new Date(),
      students: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/users")
      .then(res => this.setState({
        students: res.data.map(user => user.username),
        username: res.data[0].username
    }))
    .catch(err => console.log(err))
  }

  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  onChangeSubject = e => {
    this.setState({
      subject: e.target.value
    });
  };

  onChangeDuaration = e => {
    this.setState({
      classDuaration: e.target.value
    });
  };

  onDateChange = date => {
    this.setState({
      date: date
    });
  };

  onSubmit = (e) => {
        e.preventDefault();

        const newStudentLog = {
          username: this.state.username,
          subject: this.state.subject,
          classDuaration: this.state.classDuaration,
          date: this.state.date
        };


        axios.post("http://localhost:5000/students/add", newStudentLog)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        
        window.location = "/"
        
  }

  render() {
    return (
      <React.Fragment>
        <h3>Create Student Logs</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Student select</label>
            <select
              className="form-control"
              ref="userInput"
              required
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.students.map(student => {
                return  <option key={student} value={student}>{student}</option>
              })}
            </select>
          </div>

          <div className="form-group">
            <label>Student Subject: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.subject}
              onChange={this.onChangeSubject}
              placeholder="Student Should input subject...."
            />
          </div>

          <div className="form-group">
            <label>Student Duration (in Hour): </label>
            <input
              type="number"
              required
              className="form-control"
              value={this.state.classDuaration}
              onChange={this.onChangeDuaration}
            />
          </div>

          <div className="form-group">
            <label>Date :</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onDateChange}
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <button
                className="btn btn-primary"
                type="submit"
                onSubmit={this.onSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}


export default StudentLogs;


// 1. get users 
// 1. create student subjects