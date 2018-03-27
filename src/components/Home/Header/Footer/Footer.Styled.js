import styled from 'styled-components'
import Footer from './Footer'

const FooterStyled = styled(Footer)`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: ${props => props.theme.colors.secondaryBackground};
  justify-content: space-between;
  height: 75px;

  ul {
    width: 100%;
    display: flex;
    max-width: 800px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    padding: 0;
    align-items: center;
  }

  li {
    width: calc((100% / 5) - 40px);
    display: inline;
  }

  li img {
    filter: contrast(100%) brightness(200%);
    max-width: 100%;
    max-height: 23px;
    margin: auto;
    display: block;
  }
`
export default FooterStyled
