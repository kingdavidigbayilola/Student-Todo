import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from "react-datepicker";


class EditStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      subject: "",
      classDuaration: 0,
      date: new Date(),
      users: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/students/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          username: res.data.username,
          subject: res.data.subject,
          classDuaration: res.data.classDuaration,
          date: new Date(res.data.date)
        });
      });

    axios.get("http://localhost:5000/users").then(res => {
      this.setState({
        users: res.data.map(users => users.username)
      });
    });
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

        const student = {
            username: this.state.username,
            subject: this.state.subject,
            classDuaration: this.state.classDuaration,
            date: this.state.date
        }
        axios.post(`http://localhost:5000/students/update/${this.props.match.params.id}`, student)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        
        
        window.location = "/";
  }

  render() {
    return (
      <React.Fragment>
        <h3>Create Student Logs</h3>
        <form onSubmit={this.onSubmit} >
          <div className="form-group">
            <label>Student Select</label>
            <select
              className="form-control"
              ref="userInput"
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(user => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
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



export default EditStudent;