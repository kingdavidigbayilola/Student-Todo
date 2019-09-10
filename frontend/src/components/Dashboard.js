import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Student(props) {
    return (
      <tr>
        <td>{props.student.username}</td>
        <td>{props.student.subject}</td>
        <td>{props.student.classDuaration}</td>
        <td>{props.student.date.substring(0, 10)}</td>
        <td>
            <Link to={`/edit/${props.student._id}`} className="btn btn-primary btn-sm" >Edit</Link> | <button className="btn btn-danger btn-sm" onClick={() => props.deleteUser(props.student._id)} >Delete</button>
        </td>
      </tr>
    );
}


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/students/")
            .then(res => this.setState({
                students: res.data
            }))
            .catch(err => console.log(err))    
    }

    deleteUser = (id) => {
        axios.delete(`http://localhost:5000/students/${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        
        this.setState({
            students: this.state.students.filter(student => student._id !== id)
        })
    }



    render() {
        return (
          <div>
            <h3>Logged Exercises</h3>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Subject</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.students.map(student => {
                            return (
                              <Student
                                key={student._id}
                                student={student}
                                deleteUser={this.deleteUser}
                              />
                            );    
                        })
                    }    
                </tbody>    
            </table>
          </div>
        );
    }
}


export default Dashboard;