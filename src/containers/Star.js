import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'

export default function Star() {
  const { star } = useRouteData()
  return (
    <div>
      <Link to="/talent/">{'<'} Back</Link>
      <br />
      <h3>{star.first_name}</h3>
      <p>{star.email}</p>
    </div>
  )
}
