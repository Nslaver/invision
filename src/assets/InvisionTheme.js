import { injectGlobal } from 'styled-components'
import kiosk from 'assets/img/kiosk.png'
import kioskSide from 'assets/img/kioskSide.png'
import logo from 'assets/img/logo.png'
import evernote from 'assets/img/evernote.png'
import netflix from 'assets/img/netflix.png'
import twitter from 'assets/img/twitter.png'
import uber from 'assets/img/uber.png'
import services from 'assets/img/services.svg'
import locations from 'assets/img/locations.svg'
import medium from 'assets/img/medium.svg'
import slack from 'assets/img/slack.svg'
import twitterLogo from 'assets/img/twitter.svg'
import hamburger from 'assets/img/hamburger.svg'
import continentMap from 'assets/maps/world-continents.json'

const Theme = {
  colors: {
    mainBackground: '#86C14E',
    secondaryBackground: '#6B9A3E',
    mainText: '#fff',
    secondaryText: '#000',
    gray: '#F9F9F9',
    white: 'white',
    lightGray: '#59585D',
    mapFill: '#DADADA'
  },
  assets: {
    kiosk: kiosk,
    kioskSide: kioskSide,
    logo: logo,
    evernote: evernote,
    netflix: netflix,
    twitter: twitter,
    uber: uber,
    services: services,
    locations: locations,
    medium: medium,
    slack: slack,
    twitterLogo: twitterLogo,
    hamburger: hamburger,
    continentMap: continentMap
  }
}

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  @font-face {
    font-family: 'Cera';
    src: url('./fonts/Cera-Regular.eot');
    src: url('./fonts/Cera-Regular.eot?#iefix') format('embedded-opentype'),
        url('./fonts/Cera-Regular.woff2') format('woff2'),
        url('./fonts/Cera-Regular.woff') format('woff'),
        url('./fonts/Cera-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background: ${Theme.colors.gray}
    font-family: 'Cera', sans-serif;
  }

  span {
    font-family: 'Open Sans', sans-serif;
  }

`

export default Theme
