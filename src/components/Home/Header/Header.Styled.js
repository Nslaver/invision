import styled from 'styled-components'
import Header from './Header'

const HeaderStyled = styled(Header)`
  width: 100%;
  height: 700px;
  background: ${props => props.theme.colors.mainBackground};
  color: ${props => props.theme.colors.mainText};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 10px 10px 0 0;
  margin: 30px 0 0;
  justify-content: space-between;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.118886);
`
export default HeaderStyled
