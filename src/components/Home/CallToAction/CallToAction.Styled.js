import styled from 'styled-components'
import CallToAction from './CallToAction'

const CallToActionStyled = styled(CallToAction)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 218px;
  margin: 20px 0 30px 0;
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
export default CallToActionStyled
