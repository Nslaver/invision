import styled from 'styled-components'
import Footer from './Footer'

const FooterStyled = styled(Footer)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 218px;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.118886);
  margin: 20px 0 30px 0;
  background: ${props => props.theme.colors.white};
  width: 100%;

  .left {
    width: calc(100% / 3);
  }

  .center {
    width: calc(100% / 3);
  }

  .right {
    width: calc(100% / 3);
  }
`
export default FooterStyled
