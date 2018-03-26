import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Locations from './Locations'
import Services from './Services'
import Footer from './Footer'

const Home = props => {
  return (
    <div className={props.className}>
      <Header />
      <Locations />
      <Services />
      <Footer />
    </div>
  )
}

Home.propTypes = {
  className: PropTypes.string
}

export default Home
