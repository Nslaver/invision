import styled from 'styled-components'
import Content from './Content'
import { Sizes } from 'assets/Media'

const ContentStyled = styled(Content)`
  width: 100%;
  background: ${props => props.theme.colors.mainBackground};
  color: ${props => props.theme.colors.mainText};
  display: flex;
  flex: flex-grow;
  flex-grow: 2;
  flex-wrap: wrap;
  margin: auto;
  max-width: 950px;
  min-height: 500px;
  padding: 0 30px;

  a {
    text-decoration: none;
    color: inherit;
  }

  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      line-height: 65px;
      font-size: 58px;
      letter-spacing: -1px;
      margin-top: 0;
      margin-bottom: 10px;

      @media (max-width: ${Sizes.phone}px) {
        line-height: 45px;
        font-size: 40px;
      }
    }

    .contact {
      display: inline;

      @media (max-width: ${Sizes.phone}px) {
        display: block;
      }
    }

    span {
      display: inline;
      padding: 0 40px 0 30px;
      line-height: 39px;

      @media (max-width: ${Sizes.phone}px) {
        padding: 0 20px 0 0;
      }
    }

    p {
      margin: 0 0 30px 0;
      padding: 0 40px 0 0;
    }

    @media (max-width: ${Sizes.phone}px) {
      width: 100%;
      margin-bottom: 50px;
    }
  }

  .right {
    background-repeat: no-repeat;
    background-image: url(${props => props.theme.assets.kiosk});
    background-position: left bottom;
    background-size: auto 100%;
    margin-left: 30px;
    width: calc(50% - 30px);
    filter: contrast(80%) drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));

    @media (max-width: ${Sizes.tablet}px) {
      background-size: auto 90%;
    }

    @media (max-width: ${Sizes.phone}px) {
      width: 100%;
      min-height: 200px;
      margin-left: 0;
      background-position: center bottom;
    }
  }
`

export default ContentStyled
