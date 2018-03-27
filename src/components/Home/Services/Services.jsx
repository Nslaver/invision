import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

const Services = props => {
  return (
    <section className={props.className}>
      <div className="left">
        <img className="kioskSide__img" src={props.theme.assets.kioskSide} alt="Kiosk Side view" />
      </div>
      <div className="right">
        <h2>Kiosk Services</h2>
        <img
          className="services__img"
          src={props.theme.assets.services}
          alt="Gift Cards, Gaming Vouchers, Cryptocurrencies, International TOP-UPs, Phone / Calling Cards,  Recycling"
        />
      </div>
    </section>
  )
}

Services.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object
}

export default withTheme(Services)
