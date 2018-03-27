import styled from 'styled-components'
import MapLocations from './MapLocations'

const MapLocationsStyled = styled(MapLocations)`
  fill: ${props => props.theme.colors.mapFill};
`
export default MapLocationsStyled
