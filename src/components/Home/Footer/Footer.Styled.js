import styled from 'styled-components'
import Footer from './Footer'

const FooterStyled = styled(Footer)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 218px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.118886);
  margin: 20px 0 30px 0;
  background: ${props => props.theme.colors.white};

  width: 100%;
  .left {
    width: 33%;
  }
  .center {
    width: 33%;
  }
  .right {
    width: 33%;
  }
`
export default FooterStyled
