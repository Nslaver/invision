import styled from 'styled-components'
import Header from './Header'
import Media from 'assets/Media'

const HeaderStyled = styled(Header)`
  width: 100%;
  background: ${props => props.theme.colors.mainBackground};
  color: ${props => props.theme.colors.mainText};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 10px 10px 0 0;
  margin: 30px 0 0;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.118886);

  a {
    text-decoration: none;
    color: inherit;
  }

  .sidea {
    width: 50%;
  }
  .sideb {
    background-repeat: no-repeat;
    background-image: url(${props => props.theme.assets.kiosk});
    background-position: center;
    background-size: auto 75%;
    width: 50%;
    ${Media.tablet`
    width: 100%;
    background-size: auto 95%`};
  }
`
export default HeaderStyled
