import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import Graph from './Graph'
import center from 'assets/img/nouns/center.svg'
import giftCards from 'assets/img/nouns/gift_cards.svg'
import crypto from 'assets/img/nouns/crypto.svg'
import phoneCards from 'assets/img/nouns/phone_cards.svg'
import recycle from 'assets/img/nouns/recycle.svg'
import topups from 'assets/img/nouns/topups.svg'
import gaming from 'assets/img/nouns/gaming.svg'

const services = [
  { text: 'Gift Cards', glyph: giftCards, dimension: { width: 50, height: 35 } },
  { text: 'Cryptocurrencies', glyph: crypto, dimension: { width: 50, height: 51 } },
  { text: 'Phone / Calling Cards', glyph: phoneCards, dimension: { width: 42, height: 42 } },
  { text: 'Recycling', glyph: recycle, dimension: { width: 40, height: 40 } },
  { text: 'International TOP-UPs', glyph: topups, dimension: { width: 50, height: 46 } },
  { text: 'Gaming Vouchers', glyph: gaming, dimension: { width: 36, height: 48 } }
]

const Services = props => {
  return (
    <section className={props.className}>
      <div className="left">
        <img className="kioskSide__img" src={props.theme.assets.kioskSide} alt="Kiosk Side view" />
      </div>
      <div className="right">
        <h2>Kiosk Services</h2>
        <Graph rotation={-90} size={650} graphRadius={220} center={center} services={services} />
      </div>
    </section>
  )
}

Services.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object
}

export default withTheme(Services)
