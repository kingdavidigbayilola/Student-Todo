import React, { Component } from 'react'
import axios from 'axios';

class StudentUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  };

    onSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        axios.post("http://localhost:5000/users/add", user)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))


        this.setState({
            username: ''
        })

        window.location = "/"
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <div>
              <button
                className="btn btn-primary"
                type="submit"
                onSubmit={this.onSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default StudentUsers;