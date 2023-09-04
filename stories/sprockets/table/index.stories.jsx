import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import TableSprocket from '@modernpoacher/sprockets/sprockets/table'

export default {
  title: 'Stories/Sprockets/Table',
  component: TableSprocket,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const Default = () => (
  <TableSprocket
    title='Default'
    head={[{ text: 'Title' }, { text: 'Title' }, { text: 'Title' }]}
    body={[
      [{ text: 'Title' }, { text: 'Value' }, { text: 'Value' }],
      [{ text: 'Title' }, { text: 'Value' }, { text: 'Value' }],
      [{ text: 'Title' }, { text: 'Value' }, { text: 'Value' }]
    ]}
  />
)

Default.parameters = {
  controls: { disabled: true, hideNoControlsWarning: true }
}

export const NoAnswers = () => (
  <TableSprocket
    title='No Answers'
  />
)

NoAnswers.parameters = {
  controls: { disabled: true, hideNoControlsWarning: true }
}
