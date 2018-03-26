import React from 'react'
import PropTypes from 'prop-types'
import { Logo } from 'components/Shared'

const Navbar = props => {
  return (
    <div className={props.className}>
      <ul>
        <li>
          <Logo />
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Kiosk</a>
        </li>
        <li>
          <a>Compliance</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  )
}

Navbar.propTypes = {
  className: PropTypes.string
}

export default Navbar
