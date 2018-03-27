import styled from 'styled-components'
import Footer from './Footer'
import { Sizes } from 'assets/Media'

const FooterStyled = styled(Footer)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: ${props => props.theme.colors.secondaryBackground};
  justify-content: space-between;
  height: 75px;
  width: 100%;

  ul {
    width: 100%;
    display: flex;
    max-width: 950px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    padding: 0 30px;
    align-items: center;
  }

  li {
    width: calc((100% / 5) - 40px);
    display: inline;

    @media (max-width: ${Sizes.phone}px) {
      width: calc((100% / 5) - 10px);
    }
  }

  li img {
    filter: contrast(100%) brightness(200%);
    max-width: 100%;
    max-height: 23px;
    margin: auto;
    display: block;

    @media (max-width: ${Sizes.phone}px) {
      max-height: 15px;
    }
  }
`
export default FooterStyled
