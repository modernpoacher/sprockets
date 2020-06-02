import React from 'react'
import PropTypes from 'prop-types'
import debug from 'debug'

import TextContent from 'shinkansen-sprockets/components/common/text-content'

import renderSummaryValue from './render-summary-value'
import getTextContentKey from './get-text-content-key'
import getLineKey from './get-line-key'

const log = debug('shinkansen:sprockets:components:group:check-answers')

export default function CheckAnswersGroupForObjectSummaryValue ({ group }) {
  log('CheckAnswersGroupForObjectSummaryValue')

  return (
    <dd>
      {group
        /*
         *  Render each value (ommitting null values)
         */
        .reduce((accumulator, { elements }, index) => {
          const value = renderSummaryValue(elements)

          return (value)
            ? accumulator.concat(<TextContent key={getTextContentKey(index)} textContent={value} />)
            : accumulator
        }, [])
        /*
         *  Suffix each value with a break (except the last)
         */
        .reduce((accumulator, value, index, array) => {
          const total = array.length - 1

          return (index < total)
            ? accumulator.concat(value).concat(<br key={getLineKey(index)} />)
            : accumulator.concat(value)
        }, [])}
    </dd>
  )
}

CheckAnswersGroupForObjectSummaryValue.propTypes = {
  group: PropTypes.array
}

CheckAnswersGroupForObjectSummaryValue.defaultProps = {
  group: []
}
