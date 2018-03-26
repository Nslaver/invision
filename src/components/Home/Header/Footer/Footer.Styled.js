import styled from 'styled-components'
import Footer from './Footer'

const FooterStyled = styled(Footer)`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: ${props => props.theme.colors.secondaryBackground};
  justify-content: space-between;
  height: 75px;

  .evernote {
    box-sizing: border-box;
    margin: 10px 20px;
    width: calc((100% / 5) - 40px);
    background: url(${props => props.theme.assets.evernote});
    filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.1));
    background-size: auto 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }

  .logo {
    box-sizing: border-box;
    margin: 10px 20px;
    width: calc((100% / 5) - 40px);
    background: url(${props => props.theme.assets.logo});
    filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.1));
    background-size: auto 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }

  .uber {
    box-sizing: border-box;
    margin: 10px 20px;
    width: calc((100% / 5) - 40px);
    background: url(${props => props.theme.assets.uber});
    filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.1));
    background-size: auto 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }

  .netflix {
    box-sizing: border-box;
    margin: 10px 20px;
    width: calc((100% / 5) - 40px);
    background: url(${props => props.theme.assets.netflix});
    filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.1));
    background-size: auto 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }

  .twitter {
    box-sizing: border-box;
    margin: 10px 20px;
    width: calc((100% / 5) - 40px);
    background: url(${props => props.theme.assets.twitter});
    filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.1));
    background-size: auto 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`
export default FooterStyled
