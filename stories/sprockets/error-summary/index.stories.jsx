import React from 'react'
import {
  MemoryRouter
} from 'react-router'

import ErrorSummarySprocket from '#sprockets/sprockets/error-summary'

export default {
  title: 'Stories/Sprockets/Error Summary',
  component: ErrorSummarySprocket,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export function OneError () {
  return (
    <ErrorSummarySprocket
      title='One Error'
      errorSummary={[
        {
          text: 'Error description',
          href: '#cog-id'
        }
      ]}
    />
  )
}

OneError.parameters = {
  controls: { disabled: true, hideNoControlsWarning: true }
}

export function NoErrors () {
  return (
    <ErrorSummarySprocket
      title='No Errors'
    />
  )
}

NoErrors.parameters = {
  controls: { disabled: true, hideNoControlsWarning: true }
}
