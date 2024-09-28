import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import ErrorSummarySprocket from '@modernpoacher/sprockets/sprockets/error-summary'

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

export function Default () {
  return (
    <ErrorSummarySprocket
      title='Default'
      errorSummary={[
        {
          text: 'Error description',
          href: '#cog-id'
        }
      ]}
    />
  )
}

Default.parameters = {
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
