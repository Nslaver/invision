import React from 'react'
import PropTypes from 'prop-types'

const Locations = props => {
  return (
    <section className={props.className}>
      <h1>Become a host location</h1>
      <span>
        Partner with Instakiosks and offer multiple financial services to your customers and
        increase revenue
      </span>
      <div>Image</div>
    </section>
  )
}

Locations.propTypes = {
  className: PropTypes.string
}

export default Locations
