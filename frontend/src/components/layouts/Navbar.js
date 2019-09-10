import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
        <Link to="/" className="navbar-brand">
          Student Todo
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Create Student Logs
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Student
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}
