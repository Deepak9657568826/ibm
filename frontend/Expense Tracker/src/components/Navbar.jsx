import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div>
      <Link to="/">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/singup">SignUp</Link>
    </div>
  )
}

export default Navbar
