import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link class="navbar-brand" to={'/'}>
          React User
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home{' '}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/about'}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/contact'}>
                Contact
              </Link>
            </li>
          </ul>
          <Link to="/user/add" className="btn btn-outline-light">
            Add User
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
