import styled from 'styled-components'
import Content from './Content'
import Media from 'assets/Media'

const ContentStyled = styled(Content)`
  width: 100%;
  background: ${props => props.theme.colors.mainBackground};
  color: ${props => props.theme.colors.mainText};
  display: flex;
  flex: flex-grow;
  flex-grow: 2;
  margin: auto;
  max-width: 800px;

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
    background-position: center bottom;
    background-size: auto 75%;
    width: 50%;

    @media (max-width: ${Media.table}em) {
      width: 100%;
      background-size: auto 95%;
    }
  }
`

export default ContentStyled
