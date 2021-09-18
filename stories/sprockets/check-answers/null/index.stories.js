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

export default {
  title: 'Components/Check Answers/Null',
  component: CheckAnswersSprocket,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const AllAnswers = () => (
  <CheckAnswersSprocket
    title='All Answers'
    checkAnswers={[
      NULL_NULL,
      NULL_NULL_ENUM,
      NULL_NULL_ANY_OF,
      NULL_NULL_ONE_OF,
      NULL_NULL_ALL_OF
    ]}
  />
)

AllAnswers.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NoAnswers = () => (
  <CheckAnswersSprocket
    title='No Answers'
    checkAnswers={[]}
  />
)

NoAnswers.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNull = () => (
  <CheckAnswersSprocket
    title='Null - Null'
    checkAnswers={[NULL_NULL]}
  />
)

NullNull.storyName = 'Null'
NullNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullEnum = () => (
  <CheckAnswersSprocket
    title='Null - Null - Enum'
    checkAnswers={[NULL_NULL_ENUM]}
  />
)

NullNullEnum.storyName = 'Null - Enum'
NullNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullAnyOf = () => (
  <CheckAnswersSprocket
    title='Null - Null - Any Of'
    checkAnswers={[NULL_NULL_ANY_OF]}
  />
)

NullNullAnyOf.storyName = 'Null - Any Of'
NullNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullOneOf = () => (
  <CheckAnswersSprocket
    title='Null - Null - One Of'
    checkAnswers={[NULL_NULL_ONE_OF]}
  />
)

NullNullOneOf.storyName = 'Null - One Of'
NullNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullAllOf = () => (
  <CheckAnswersSprocket
    title='Null - Null - All Of'
    checkAnswers={[NULL_NULL_ALL_OF]}
  />
)

NullNullAllOf.storyName = 'Null - All Of'
NullNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}
