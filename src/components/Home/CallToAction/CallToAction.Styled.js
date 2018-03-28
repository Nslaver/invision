import styled from 'styled-components'
import CallToAction from './CallToAction'

const CallToActionStyled = styled(CallToAction)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 60px 0 30px 0;
  width: 100%;
  align-items: center;
  text-align: center;

  .center {
    width: 80%;
    margin: auto;

    span {
      display: block;
      width: 100%;
      max-width: 630px;
      line-height: 35px;
      font-size: 23px;
      margin: 0 auto 20px auto;
    }
  }
`
export default CallToActionStyled
