import React from 'react'
import PropTypes from 'prop-types'
import {
  ComposableMap,
  Geographies,
  Geography,
  Markers,
  Marker,
  ZoomableGroup
} from 'react-simple-maps'
import { withTheme } from 'styled-components'

const markers = [
  { markerOffset: -35, name: 'Buenos Aires', coordinates: [-58.3816, -34.6037] },
  { markerOffset: -35, name: 'La Paz', coordinates: [-68.1193, -16.4897] },
  { markerOffset: 15, name: 'Brasilia', coordinates: [-47.8825, -15.7942] },
  { markerOffset: 15, name: 'Santiago', coordinates: [-70.6693, -33.4489] },
  { markerOffset: 15, name: 'Bogota', coordinates: [-74.0721, 4.711] },
  { markerOffset: 15, name: 'Quito', coordinates: [-78.4678, -0.1807] },
  { markerOffset: -35, name: 'Georgetown', coordinates: [-58.1551, 6.8013] },
  { markerOffset: -35, name: 'Asuncion', coordinates: [-57.5759, -25.2637] },
  { markerOffset: 15, name: 'Paramaribo', coordinates: [-55.2038, 5.852] },
  { markerOffset: 15, name: 'Montevideo', coordinates: [-56.1645, -34.9011] },
  { markerOffset: -35, name: 'Caracas', coordinates: [-66.9036, 10.4806] }
]

const MapLocations = props => {
  return (
    <ComposableMap className={props.className}>
      <ZoomableGroup disablePanning>
        <Geographies geography={props.theme.assets.continentMap}>
          {(geographies, projection) =>
            geographies.map(geography => (
              <Geography key={geography.id} geography={geography} projection={projection} />
            ))
          }
        </Geographies>
        <Markers>
          {markers.map((marker, i) => (
            <Marker key={i} marker={marker}>
              <circle
                cx={0}
                cy={0}
                r={10}
                style={{
                  stroke: '#FF5722',
                  strokeWidth: 3,
                  opacity: 0.9
                }}
              />
              <image x="-16" y="-40" width="33" height="43" xlinkHref="img/marker.svg" />
            </Marker>
          ))}
        </Markers>
      </ZoomableGroup>
    </ComposableMap>
  )
}

MapLocations.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object
}

export default withTheme(MapLocations)
