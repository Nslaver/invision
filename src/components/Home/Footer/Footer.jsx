import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
const Footer = props => {
  return (
    <section className={props.className}>
      <div className="left">© 2018 InstaKiosks LLC. All rights reserved</div>
      <div className="center">
        <div>Got Question? Ask us on our channels</div>
        <ul>
          <li>
            <img src={props.theme.assets.medium} alt="Medium logo" />
          </li>
          <li>
            <img src={props.theme.assets.slack} alt="Slack logo" />
          </li>
          <li>
            <img src={props.theme.assets.twitterLogo} alt="Twitter logo" />
          </li>
        </ul>
      </div>
      <div className="right">
        <a>Privacy Policy</a>
        <br />
        <span>Terms of use</span>
      </div>
    </section>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object
}

export default withTheme(Footer)
