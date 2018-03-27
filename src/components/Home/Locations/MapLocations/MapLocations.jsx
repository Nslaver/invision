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
  { markerOffset: 15, name: 'Bogota', coordinates: [-74.0721, 4.711] },
  { markerOffset: 15, name: 'Brasilia', coordinates: [-47.8825, -15.7942] },
  { markerOffset: -35, name: 'Miami', coordinates: [-80.19, 25.76] },
  { markerOffset: -35, name: 'Zurich', coordinates: [+30.12, 60.64] },
  { markerOffset: 15, name: 'Mumbai', coordinates: [+72.87, +19.07] },
  { markerOffset: 15, name: 'Darwin', coordinates: [+131.2, -12.86] },
  { markerOffset: -35, name: 'Mali', coordinates: [1.1551, 16.8013] },
  { markerOffset: -35, name: 'Congo', coordinates: [17.5759, -5.2637] }
]

const MapLocations = props => {
  return (
    <ComposableMap
      className={props.className}
      projectionConfig={{
        scale: 180,
        yOffset: 30
      }}
    >
      <ZoomableGroup>
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
