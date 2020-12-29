import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'

export default function Talent() {
  const { talent } = useRouteData()
  console.log('talent got from route: ', talent)
  return (
    <div>
      <h1>It's talent time.</h1>
      <div>
        <a href="#bottom" id="top">
          Scroll to bottom!
        </a>
      </div>
      <br />
      All Talent:
      <ul>
        {talent.map(star => (
          <li key={star.id}>
            <Link to={`/talent/${star.id}/`}>{`${star.first_name} ${star.last_name}`}</Link>
          </li>
        ))}
      </ul>
      <a href="#top" id="bottom">
        Scroll to top!
      </a>
    </div>
  )
}
