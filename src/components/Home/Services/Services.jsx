import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import Graph from './Graph'

const Services = props => {
  return (
    <section className={props.className}>
      <div className="left">
        <img className="kioskSide__img" src={props.theme.assets.kioskSide} alt="Kiosk Side view" />
      </div>
      <div className="right">
        <h2>Kiosk Services</h2>
        <Graph />
      </div>
    </section>
  )
}

Services.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object
}

export default withTheme(Services)
