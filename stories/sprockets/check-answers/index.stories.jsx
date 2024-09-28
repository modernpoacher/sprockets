import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import CheckAnswersSprocket from '@modernpoacher/sprockets/sprockets/check-answers'

export default {
  title: 'Stories/Sprockets/Check Answers',
  component: CheckAnswersSprocket,
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
    <CheckAnswersSprocket
      title='Default'
      checkAnswers={[
        {
          answer: { title: 'Title', value: 'Value' },
          changeAnswer: { text: 'Link text', href: '#cog-route', visuallyHiddenText: 'Visually hidden text' }
        }
      ]}
    />
  )
}

Default.parameters = {
  controls: { disabled: true, hideNoControlsWarning: true }
}

export function NoAnswers () {
  return (
    <CheckAnswersSprocket
      title='No Answers'
    />
  )
}

NoAnswers.parameters = {
  controls: { disabled: true, hideNoControlsWarning: true }
}
