import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light" style={{position:"fixed",zIndex:"5",width:"100%"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Daily News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">All</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cat">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tech">Technology</Link>
        </li>
       
        
      </ul>

    </div>
  </div>
</nav>
    </>
  )
}
