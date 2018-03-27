import styled from 'styled-components'

const Logo = styled.div`
  background: url(${props => props.theme.assets.logo});
  filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.1));
  height: 30px;
  width: 90px;
  background-size: 100% auto;
  background-position: 50%;
  background-repeat: no-repeat;
`
export default Logo
