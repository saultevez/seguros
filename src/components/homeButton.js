import React from 'react'
import { Link } from 'react-router-dom'

const HomeButton = ({ to, label }) => (
  <li className="text-black hover:text-blue-500">
    <Link to={to}>{label}</Link>
  </li>
)

export default HomeButton
