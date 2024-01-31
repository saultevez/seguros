import React from 'react'
import { Link } from 'react-router-dom'

const HomeButton = ({ to, label }) => (
  <li className={'duration-300 bg-transparent border border-blue-500 text-blue-800 hover:bg-blue-100 rounded-lg w-72 text-center'}>
    <Link className=' p-4 w-full h-full block' to={to}>{label}</Link>
  </li>
)

export default HomeButton
