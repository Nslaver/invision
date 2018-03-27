import styled from 'styled-components'
import Locations from './Locations'

const LocationsStyled = styled(Locations)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.118886);
  background: ${props => props.theme.colors.white};
  padding: 10px 50px;

  h1 {
    width: 100%;
  }

  span {
    width: 100%;
  }

  img {
    height: 500px;
  }
`
export default LocationsStyled
