import styled from 'styled-components'
import CallToAction from './CallToAction'

const CallToActionStyled = styled(CallToAction)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 218px;
  margin: 20px 0 30px 0;
  width: 100%;

  .center {
    width: 80%;
    margin: auto;
  }
`
export default CallToActionStyled
