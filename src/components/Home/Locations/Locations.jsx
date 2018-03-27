import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import { Container } from 'components/Shared'
import Map from './MapLocations'

const Locations = props => {
  return (
    <section className={props.className}>
      <Container>
        <h1>Become a host location</h1>
        <span>
          Partner with Instakiosks and offer multiple financial services to your customers and
          increase revenue
        </span>
        <Map />
      </Container>
    </section>
  )
}

Locations.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object
}

export default withTheme(Locations)
