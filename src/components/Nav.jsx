import React from "react"

import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="list-none hidden ml-auto space-x-1 sm:flex">
      <li>
        <Link to="/" className="px-8 py-3 text-indigo-100 rounded-md flex bg-black">
          Home
        </Link>
      </li>
      <li>
        <Link to="/add" className="px-8 py-3 text-indigo-100 rounded-md  flex bg-black">
          Add Deliveries
        </Link>
      </li>
    </nav>
  )
}

export default Nav
