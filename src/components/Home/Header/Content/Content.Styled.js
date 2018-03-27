import styled from 'styled-components'
import Content from './Content'
import { sizes } from 'assets/Media'

const ContentStyled = styled(Content)`
  width: 100%;
  background: ${props => props.theme.colors.mainBackground};
  color: ${props => props.theme.colors.mainText};
  display: flex;
  flex: flex-grow;
  flex-grow: 2;
  flex-wrap: wrap;
  margin: auto;
  max-width: 800px;

  a {
    text-decoration: none;
    color: inherit;
  }

  .left {
    width: 50%;
  }

  .right {
    background-repeat: no-repeat;
    background-image: url(${props => props.theme.assets.kiosk});
    background-position: center bottom;
    background-size: auto 100%;
    width: 50%;

    @media (max-width: ${sizes.phone}px) {
      width: 100%;
    }
  }
`

export default ContentStyled
