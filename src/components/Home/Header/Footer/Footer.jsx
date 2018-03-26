import React from 'react'
import PropTypes from 'prop-types'
import evernote from 'assets/img/evernote.png'
import logo from 'assets/img/logo.png'
import uber from 'assets/img/uber.png'
import netflix from 'assets/img/netflix.png'
import twitter from 'assets/img/twitter.png'

const Footer = props => {
  return (
    <div className={props.className}>
      <ul>
        <li>
          <img src={evernote} alt="evernote" />
        </li>
        <li>
          <img src={logo} alt="logo" />
        </li>
        <li>
          <img src={uber} alt="uber" />
        </li>
        <li>
          <img src={netflix} alt="netflix" />
        </li>
        <li>
          <img src={twitter} alt="twitter" />
        </li>
      </ul>
    </div>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer
