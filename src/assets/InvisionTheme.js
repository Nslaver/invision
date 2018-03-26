import { injectGlobal } from 'styled-components'
import kiosk from 'assets/img/kiosk.png'
import kioskSide from 'assets/img/kioskSide.png'
import logo from 'assets/img/logo.png'
import evernote from 'assets/img/evernote.png'
import netflix from 'assets/img/netflix.png'
import twitter from 'assets/img/twitter.png'
import uber from 'assets/img/uber.png'

const Theme = {
  colors: {
    mainBackground: '#86C14E',
    secondaryBackground: '#6B9A3E',
    mainText: '#fff',
    secondaryText: '#000',
    gray: '#F9F9F9',
    white: 'white'
  },
  assets: {
    kiosk: kiosk,
    kioskSide: kioskSide,
    logo: logo,
    evernote: evernote,
    netflix: netflix,
    twitter: twitter,
    uber: uber
  }
}

injectGlobal`
  @font-face {
    font-family: 'Lato';
    src: url('../assets/fonts/Lato-Bold.eot');
    src: url('../assets/fonts/Lato-Bold.eot?#iefix') format('embedded-opentype'),
      url('../assets/fonts/Lato-Bold.woff') format('woff'),
      url('../assets/fonts/Lato-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  body {
    background: ${Theme.colors.gray}
  }
`

export default Theme
