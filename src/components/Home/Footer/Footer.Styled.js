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
  align-items: center;
  color: ${props => props.theme.colors.lightGray};

  .left {
    align-items: left;
    font-size: 18px;
    mix-blend-mode: normal;
    opacity: 0.36;
  }

  .center {
    align-items: center;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0;
      align-items: baseline;
      list-style-type: none;
    }

    img {
      padding: 0 10px;
    }
  }

  .right {
    align-items: right;
  }
`
export default FooterStyled
