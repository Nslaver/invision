import styled from 'styled-components'
import Footer from './Footer'
import { Sizes } from 'assets/Media'

const FooterStyled = styled(Footer)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.118886);
  margin: 20px 0 30px 0;
  background: ${props => props.theme.colors.white};
  width: 100%;
  justify-content: space-evenly;
  color: ${props => props.theme.colors.lightGray};
  padding: 70px 20px;

  .left {
    text-align: left;
    vertical-align: top;
    mix-blend-mode: normal;
    opacity: 0.36;
    width: calc(100% / 3);
    max-width: calc(950px / 3);
    font-size: 11px;

    @media (max-width: ${Sizes.phone}px) {
      order: 3;
      width: 100%;
    }
  }

  .center {
    text-align: center;
    vertical-align: middle;
    width: calc(100% / 3);
    max-width: calc(950px / 3);
    font-size: 13px;

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

    @media (max-width: ${Sizes.phone}px) {
      width: 100%;
    }
  }

  .right {
    text-align: right;
    vertical-align: top;
    align-items: right;
    width: calc(100% / 3);
    max-width: calc(950px / 3);
    font-size: 12px;

    @media (max-width: ${Sizes.phone}px) {
      order: 1;
      width: 100%;
    }
  }
`
export default FooterStyled
