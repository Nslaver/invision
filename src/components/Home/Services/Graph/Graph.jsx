import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import giftCards from 'assets/img/nouns/gift_cards.svg'
import center from 'assets/img/nouns/center.svg'
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

const Graph = props => {
  const { size, className, rotation, graphRadius } = props
  return (
    <svg viewBox={`0 0 ${size - 100} ${size}`} className={className}>
      <g transform="translate(-50)">
        {services.map((services, index, array) => {
          const a = (rotation + index * (360 / array.length)) * Math.PI / 180
          const x = size / 2 + graphRadius * Math.cos(a)
          const y = size / 2 + graphRadius * Math.sin(a)
          return (
            <Fragment key={index}>
              <line x1={size / 2} y1={size / 2} x2={x} y2={y} className="line__connector" />
              <circle cx={x} cy={y} r={66} className="circle__glyphs" />
              <image
                width={services.dimension.width}
                height={services.dimension.height}
                x={x - services.dimension.width / 2}
                y={y - services.dimension.height / 2}
                xlinkHref={services.glyph}
              />
              <text x={x} y={y + 100} className="text__glyphs">
                {services.text}
              </text>
            </Fragment>
          )
        })}
        <circle cx={size / 2} cy={size / 2} r={66} className="circle__center" />
        <image width={45} height={44} x={size / 2 - 45 / 2} y={size / 2 - 22} xlinkHref={center} />
      </g>
    </svg>
  )
}

Graph.propTypes = {
  className: PropTypes.string,
  rotation: PropTypes.number,
  size: PropTypes.number,
  graphRadius: PropTypes.number
}

export default Graph
