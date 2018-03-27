import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components/Shared'

const CallToAction = props => {
  return (
    <section className={props.className}>
      <div className="center">
        <h1>
          Partner with Instakiosks and offer multiple financial services to your customers and
          increase revenue
        </h1>
        <Button>Join Our Network</Button>
      </div>
    </section>
  )
}

CallToAction.propTypes = {
  className: PropTypes.string
}

export default CallToAction
