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
      <g>
        <image x="200" y="200" xlinkHref={center} />
        {services.map((services, index, array) => {
          const r = 150
          const a = index * (360 / array.length) * Math.PI / 180
          const x = 200 + r * Math.cos(a)
          const y = 200 + r * Math.sin(a)
          return (
            <Fragment key={index}>
              <circle />
              <image x={x} y={y} xlinkHref={services.glyph} />
              <text>services.text</text>
            </Fragment>
          )
        })}
      </g>
    </svg>
  )
}

Graph.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object
}

export default withTheme(Graph)
