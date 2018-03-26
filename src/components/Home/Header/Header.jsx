import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import Footer from './Footer'
import Content from './Content'

const Header = props => {
  return (
    <section className={props.className}>
      <Navbar />
      <Content />
      <Footer />
    </section>
  )
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header
