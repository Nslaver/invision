import styled from 'styled-components'
import Navbar from './Navbar'

const NavbarStyled = styled(Navbar)`
  width: 100%;
  max-width: 800px;
  height: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  li {
    display: inline;
  }

  li:first-child {
    width: 50%;
  }
`
export default NavbarStyled
