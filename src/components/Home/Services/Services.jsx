import React from 'react'
import PropTypes from 'prop-types'
import ServicesImage from 'assets/img/services.svg'

const Services = props => {
  return (
    <section className={props.className}>
      <div className="left" />
      <div className="right">
        <img
          className="services"
          src={ServicesImage}
          alt="Gift Cards, Gaming Vouchers, Cryptocurrencies, International TOP-UPs, Phone / Calling Cards,  Recycling"
        />
      </div>
    </section>
  )
}

Services.propTypes = {
  className: PropTypes.string
}

export default Services
