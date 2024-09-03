import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.about}</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>

  )
}

//used to set properties variable type. if we set here title as string type but send integer or other value it shows error 
//isrequied is used if we set here required and not sent prop values in app.js it hows error if no defalut value also
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string
}


//used to set default value if no values passes in title and about it gives defaUlt values
Navbar.defaultProps={
    title:'My Website',
    about:'About'
};
