import React from 'react'
import PropTypes from 'prop-types'
import { Logo } from 'components/Shared'

const Navbar = props => {
  return (
    <section className={props.className}>
      <Logo />
      <a>Services</a>
      <a>Kiosk</a>
      <a>Compliance</a>
      <a>Contact</a>
    </section>
  )
}

Navbar.propTypes = {
  className: PropTypes.string
}

export default Navbar
