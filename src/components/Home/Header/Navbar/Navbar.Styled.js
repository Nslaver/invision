import styled from 'styled-components'
import Navbar from './Navbar'
import { Sizes } from 'assets/Media'

const NavbarStyled = styled(Navbar)`
  width: 100%;
  max-width: 950px;
  height: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 30px;

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    align-items: center;
  }

  li {
    display: inline;

    @media (max-width: ${Sizes.phone}px) {
      display: none;
    }
  }

  li:first-child {
    width: 50%;

    @media (max-width: ${Sizes.tablet}px) {
      width: 30%;
    }

    @media (max-width: ${Sizes.phone}px) {
      display: inline;
    }
  }

  ul::after {
    @media (max-width: ${Sizes.phone}px) {
      content: "";
      height: 50px;
      width: 50px;
      background: url(/static/media/hamburger.86595150.svg);
      background-position: center center;
      background-repeat: no-repeat;
      filter: invert(100%);
    }
  }
`
export default NavbarStyled
