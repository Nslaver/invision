import styled from 'styled-components'
import Services from './Services'
import {Sizes} from 'assets/Media'
const ServicesStyled = styled(Services)`
  width: 100%;
  border-radius: 10px;
  margin: 20px 0;
  padding: 10px 50px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.118886);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: ${props => props.theme.colors.white};

  @media (max-width: ${Sizes.phone}px) {
    flex-direction: row-reverse;
  }

  .left {
    background-image: url(${props => props.theme.assets.kioskSide});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: auto 80%;
    width: 50%;

    @media (max-width: ${Sizes.phone}px) {
      width: 100%;
    }
  }

  .right {
    width: 50%;

    @media (max-width: ${Sizes.phone}px) {
      width: 100%;
    }

    .services__img {
      width: 100%;
    }
  }
`
export default ServicesStyled
