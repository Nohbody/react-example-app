import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => (
  <span>
    <Link to="/random">Random</Link>
    <span> | </span>
    <Link to="/search">Search</Link>
    <span> | </span>
    <Link to={{ pathname: 'https://icanhazdadjoke.com/api' }} target="_blank">
      API
    </Link>
  </span>
)

export default NavigationBar
