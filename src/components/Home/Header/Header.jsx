import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import Footer from './Footer'
import { Button } from 'components/Shared'

const Header = props => {
  return (
    <section className={props.className}>
      <Navbar />
      <div className="sidea">
        <h1>Become a host</h1>
        <h3>Recive a comition</h3>
        <div>
          <Button>Read More</Button>
          <a href="example@example.com">or contact sales</a>
        </div>
      </div>
      <div className="sideb" />
      <Footer />
    </section>
  )
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header
