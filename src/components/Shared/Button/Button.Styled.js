import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.theme.colors.secondaryBackground};
  color: ${props => props.theme.colors.mainText};
  border-radius: 25px;
  border: none;
  height: 50px;
  width: 100px;
  transition: 0.5s;

  &:hover {
    color: ${props => props.theme.colors.mainBackground};
    background: white;
  }
`
export default Button
