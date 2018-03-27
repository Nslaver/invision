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
  padding: 10px 50px 90px 50px;
  align-items: center;
  text-align: center;

  h1 {
    width: 100%;
    margin-top: 65px;
    line-height: 65px;
  }

  span {
    width: 100%;
    margin: 0 auto 70px auto;
    max-width: 430px;
  }

  .location__img {
    width: 100%;
    height: 50%;
  }
`
export default LocationsStyled
