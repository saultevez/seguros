import React from 'react'
import { Link } from 'react-router-dom'

const HomeButton = ({ to, label }) => (
  <li className="text-black hover:text-blue-500 bg-blue-100/50 max-w-72 hover:bg-blue-200/50 rounded-lg  w-full text-center duration-300">
    <Link className=' p-4 w-full h-full block' to={to}>{label}</Link>
  </li>
)

export default HomeButton
