import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import CheckAnswersSprocket from 'shinkansen-sprockets/sprockets/check-answers'

import NUMBER_NUMBER from 'stories/definitions/check-answers/number-number'
import NUMBER_NUMBER_ENUM from 'stories/definitions/check-answers/number-number-enum'
import NUMBER_NUMBER_ANY_OF from 'stories/definitions/check-answers/number-number-any-of'
import NUMBER_NUMBER_ONE_OF from 'stories/definitions/check-answers/number-number-one-of'
import NUMBER_NUMBER_ALL_OF from 'stories/definitions/check-answers/number-number-all-of'

const NUMBER = {
  NUMBER_NUMBER: [NUMBER_NUMBER],
  NUMBER_NUMBER_ENUM: [NUMBER_NUMBER_ENUM],
  NUMBER_NUMBER_ANY_OF: [NUMBER_NUMBER_ANY_OF],
  NUMBER_NUMBER_ONE_OF: [NUMBER_NUMBER_ONE_OF],
  NUMBER_NUMBER_ALL_OF: [NUMBER_NUMBER_ALL_OF]
}

export default {
  title: 'Components/Check Answers/Number',
  component: CheckAnswersSprocket,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    title: 'Check Answers',
    checkAnswers: 'NUMBER_NUMBER'
  },
  argTypes: {
    checkAnswers: {
      options: Object.keys(NUMBER),
      mapping: NUMBER,
      control: {
        type: 'radio',
        labels: {
          NUMBER_NUMBER: 'Number',
          NUMBER_NUMBER_ENUM: 'Number - Enum',
          NUMBER_NUMBER_ANY_OF: 'Number - Any Of',
          NUMBER_NUMBER_ONE_OF: 'Number - One Of',
          NUMBER_NUMBER_ALL_OF: 'Number - All Of'
        }
      }
    }
  }
}

export const Default = (args) => (
  <CheckAnswersSprocket
    {...args}
  />
)

export const AllAnswers = () => (
  <CheckAnswersSprocket
    title='All Answers'
    checkAnswers={Object.values(NUMBER).map(([n]) => n)}
  />
)

AllAnswers.parameters = {
  controls: { disabled: true, hideNoControlsWarning: true }
}

export const NoAnswers = () => (
  <CheckAnswersSprocket
    title='No Answers'
    checkAnswers={[]}
  />
)

NoAnswers.parameters = {
  controls: { disabled: true, hideNoControlsWarning: true }
}
