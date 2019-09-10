import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/layouts/Navbar';
import Dashboard from './components/Dashboard';
import StudnetLogs from './components/StudentLogs';
import StudentUsers from './components/StudentUsers';
import EditStudent from './components/EditStudent';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />

          <Route path="/" exact component={Dashboard} />
          <Route path="/create" component={StudnetLogs} />
          <Route path="/user" component={StudentUsers} />
          <Route path="/edit/:id" component={EditStudent} />

          {/* To use the links we have to import it our component */}
        </div>
      </Router>
    );
  }
}




export default App;