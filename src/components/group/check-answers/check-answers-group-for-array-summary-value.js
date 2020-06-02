import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import TextContent from 'shinkansen-sprockets/components/common/text-content'

import renderSummaryValue from './render-summary-value'
import getParaKey from './get-para-key'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function CheckAnswersGroupForArraySummaryValue ({ group }) {
  log('CheckAnswersGroupForArraySummaryValue')

  return (
    <dd>
      {group
        /*
         *  Render each value (ommitting null values)
         */
        .reduce((accumulator, { elements }, index) => {
          const value = renderSummaryValue(elements)

          return (value)
            ? accumulator.concat(<p key={getParaKey(index)}><TextContent textContent={value} /></p>)
            : accumulator
        }, [])
      }
    </dd>
  )
}

CheckAnswersGroupForArraySummaryValue.propTypes = {
  group: PropTypes.array
}

CheckAnswersGroupForArraySummaryValue.defaultProps = {
  group: []
}
