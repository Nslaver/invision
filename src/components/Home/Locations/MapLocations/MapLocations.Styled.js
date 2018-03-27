import styled from 'styled-components'
import MapLocations from './MapLocations'
import { Sizes } from 'assets/Media'

const MapLocationsStyled = styled(MapLocations)`
  margin: auto;
  fill: ${props => props.theme.colors.mapFill};
  max-width: 100%;

  @media (max-width: ${Sizes.tablet}px) {
    max-height: 250px;
  }

  @media (max-width: ${Sizes.phone}px) {
    max-height: 150px;
  }
`
export default MapLocationsStyled
