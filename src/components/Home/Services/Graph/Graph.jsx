import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Graph = props => {
  const { size, className, rotation, graphRadius, center, services } = props
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
  graphRadius: PropTypes.number,
  center: PropTypes.string,
  services: PropTypes.array
}

export default Graph
