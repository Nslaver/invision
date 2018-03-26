import React from 'react'
import PropTypes from 'prop-types'

const Services = props => {
  return (
    <section className={props.className}>
      <div className="left" />
      <div className="right">Services</div>
    </section>
  )
}

Services.propTypes = {
  className: PropTypes.string
}

export default Services
