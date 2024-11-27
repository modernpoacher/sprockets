import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import CheckAnswersSprocket from '#sprockets/sprockets/check-answers'

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

export function OneAnswer () {
  return (
    <CheckAnswersSprocket
      title='One Answer'
      checkAnswers={[
        {
          answer: { title: 'Title', value: 'Value' },
          changeAnswer: { text: 'Link text', href: '#cog-route', visuallyHiddenText: 'Visually hidden text' }
        }
      ]}
    />
  )
}

OneAnswer.parameters = {
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
