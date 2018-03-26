import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components/Shared'

const Content = props => {
  return (
    <div className={props.className}>
      <div className="sidea">
        <h1>Become a host</h1>
        <h3>Recive a comition</h3>
        <div>
          <Button>Read More</Button>
          <a href="example@example.com">or contact sales</a>
        </div>
      </div>
      <div className="sideb" />
    </div>
  )
}

Content.propTypes = {
  className: PropTypes.string
}

export default Content
