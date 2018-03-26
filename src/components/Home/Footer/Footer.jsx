import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
  return (
    <section className={props.className}>
      <div className="left">© 2016 InstaKiosks LLC. All rights reserved</div>
      <div className="center">
        <div>Got Question? Ask us on our channels</div>
        <div>med slack twit</div>
      </div>
      <div className="right">c</div>
    </section>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer
