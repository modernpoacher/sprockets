import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import {
  CheckAnswersSprocket
} from 'shinkansen-sprockets'

import NULL_NULL from 'stories/definitions/check-answers/null-null'
import NULL_NULL_ENUM from 'stories/definitions/check-answers/null-null-enum'
import NULL_NULL_ANY_OF from 'stories/definitions/check-answers/null-null-any-of'
import NULL_NULL_ONE_OF from 'stories/definitions/check-answers/null-null-one-of'
import NULL_NULL_ALL_OF from 'stories/definitions/check-answers/null-null-all-of'

const NULL = {
  NULL_NULL: [NULL_NULL],
  NULL_NULL_ENUM: [NULL_NULL_ENUM],
  NULL_NULL_ANY_OF: [NULL_NULL_ANY_OF],
  NULL_NULL_ONE_OF: [NULL_NULL_ONE_OF],
  NULL_NULL_ALL_OF: [NULL_NULL_ALL_OF]
}

export default {
  title: 'Components/Check Answers/Null',
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
    checkAnswers: 'NULL_NULL'
  },
  argTypes: {
    checkAnswers: {
      options: Object.keys(NULL),
      mapping: NULL,
      control: {
        type: 'radio',
        labels: {
          NULL_NULL: 'Null',
          NULL_NULL_ENUM: 'Null - Enum',
          NULL_NULL_ANY_OF: 'Null - Any Of',
          NULL_NULL_ONE_OF: 'Null - One Of',
          NULL_NULL_ALL_OF: 'Null - All Of'
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
    checkAnswers={Object.values(NULL).map(([n]) => n)}
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
