import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import CheckAnswersSprocket from '@modernpoacher/sprockets/sprockets/check-answers'
import AnswerItem from '@modernpoacher/sprockets/sprockets/check-answers/group/answer-item'

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

export const Default = () => (
  <CheckAnswersSprocket
    title='Default'>
    <AnswerItem
      answer={{ title: 'Title', value: 'Value' }}
      changeAnswer={{ text: 'Link text', href: '#cog-route', visuallyHiddenText: 'Visually hidden text' }}
    />
  </CheckAnswersSprocket>
)

Default.parameters = {
  controls: { disabled: true, hideNoControlsWarning: true }
}

export const NoAnswers = () => (
  <CheckAnswersSprocket
    title='No Answers'
  />
)

NoAnswers.parameters = {
  controls: { disabled: true, hideNoControlsWarning: true }
}
