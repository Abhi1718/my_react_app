// import React from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode} `}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>
          {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className=" btn btn-outline-light" type="submit">Search</button>
            </form> */}
          <div className="form-check form-switch">
            <input onClick={props.showMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
              <label className={`form-check-label text-${props.mode}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Set the types of props coming from App.js 
Navbar.propTypes = {
  title: PropTypes.string.isRequired, /* Is required means the props must be passed when 
    the props not passed from App.js the default props are used */
  about: PropTypes.string.isRequired
}

// The default props used when the incoming props are not passed
Navbar.defaultProps = {
  title: 'Title is here',
  about: 'About is here',
  contact: "Contact is here"
}
