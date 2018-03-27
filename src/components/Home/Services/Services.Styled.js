import styled from 'styled-components'
import Services from './Services'
import {Sizes} from 'assets/Media'
const ServicesStyled = styled(Services)`
  width: 100%;
  border-radius: 10px;
  margin: 20px 0;
  padding: 64px 50px 0 50px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.118886);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: ${props => props.theme.colors.white};

  @media (max-width: ${Sizes.phone}px) {
    flex-direction: row-reverse;
    padding: 20px;
  }

  .left {
    width: calc(100% * 5 / 12);
    position: relative;

    @media (max-width: ${Sizes.phone}px) {
      width: 100%;
    }

    .kioskSide__img {
      position: absolute;
      bottom: 0;
      filter: contrast(80%) drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
      width: 100%;

      @media (max-width: ${Sizes.phone}px) {
        display: none;
      }
    }
  }

  .right {
    width: calc(100% * 7 / 12 - 125px);
    padding: 0 125px 60px 0;

    @media (max-width: ${Sizes.phone}px) {
      width: 100%;
      padding: 0 25px;
    }

    .services__img {
      width: 100%;
    }
  }
`
export default ServicesStyled
