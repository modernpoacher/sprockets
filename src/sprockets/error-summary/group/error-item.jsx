import React from 'react'
import PropTypes from 'prop-types'

import TextContent from '#sprockets/components/common/text-content'

export default function ErrorItem ({
  href,
  text
}) {
  return (
    <li className='error'>
      <a href={href}>
        <TextContent textContent={text} />
      </a>
    </li>
  )
}

ErrorItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
