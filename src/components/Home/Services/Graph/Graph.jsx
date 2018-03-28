import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import giftCards from 'assets/img/nouns/gift_cards.svg'
import center from 'assets/img/nouns/center.svg'
import crypto from 'assets/img/nouns/gift_cards.svg'

const services = [
  { text: 'Gift Cards', glyph: giftCards },
  { text: 'Cryptocurrencies', glyph: crypto },
  { text: 'Phone / Calling Cards', glyph: giftCards },
  { text: 'Recycling', glyph: giftCards },
  { text: 'International TOP-UPs', glyph: giftCards },
  { text: 'Gaming Vouchers', glyph: giftCards }
]

const Graph = props => {
  return (
    <svg width="400" widht="400" viewBox="0 0 400 400" className={props.className}>
      <image x="50" y="50" width="33" height="43" xlinkHref={center} />
      {services.map((services, index) => {
        return (
          <Fragment key={index}>
            <circle key={index} />
            <image x="-16" y="-40" width="33" height="43" xlinkHref={services.glyph} />
            <text>services.text</text>
          </Fragment>
        )
      })}
    </svg>
  )
}

Graph.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object
}

export default withTheme(Graph)
