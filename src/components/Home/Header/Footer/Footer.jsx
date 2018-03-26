import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
  return (
    <section className={props.className}>
      <div className="evernote" />
      <div className="logo" />
      <div className="uber" />
      <div className="netflix" />
      <div className="twitter" />
    </section>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer
