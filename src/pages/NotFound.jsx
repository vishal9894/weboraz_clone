import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>The page you were looking for does not exist.</p>
      <Link to='/'>Go back home</Link>
    </div>
  )
}

export default NotFound
