import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import {
  CheckAnswersSprocket
} from 'shinkansen-sprockets'

import BOOLEAN_BOOLEAN from 'stories/definitions/check-answers/boolean-boolean'
import BOOLEAN_BOOLEAN_ENUM from 'stories/definitions/check-answers/boolean-boolean-enum'
import BOOLEAN_BOOLEAN_ANY_OF from 'stories/definitions/check-answers/boolean-boolean-any-of'
import BOOLEAN_BOOLEAN_ONE_OF from 'stories/definitions/check-answers/boolean-boolean-one-of'
import BOOLEAN_BOOLEAN_ALL_OF from 'stories/definitions/check-answers/boolean-boolean-all-of'

export default {
  title: 'Components/Check Answers/Boolean',
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
      BOOLEAN_BOOLEAN,
      BOOLEAN_BOOLEAN_ENUM,
      BOOLEAN_BOOLEAN_ANY_OF,
      BOOLEAN_BOOLEAN_ONE_OF,
      BOOLEAN_BOOLEAN_ALL_OF
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

export const BooleanBoolean = () => (
  <CheckAnswersSprocket
    title='Boolean - Boolean'
    checkAnswers={[BOOLEAN_BOOLEAN]}
  />
)

BooleanBoolean.storyName = 'Boolean'
BooleanBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanEnum = () => (
  <CheckAnswersSprocket
    title='Boolean - Boolean - Enum'
    checkAnswers={[BOOLEAN_BOOLEAN_ENUM]}
  />
)

BooleanBooleanEnum.storyName = 'Boolean - Enum'
BooleanBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanAnyOf = () => (
  <CheckAnswersSprocket
    title='Boolean - Boolean - Any Of'
    checkAnswers={[BOOLEAN_BOOLEAN_ANY_OF]}
  />
)

BooleanBooleanAnyOf.storyName = 'Boolean - Any Of'
BooleanBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanOneOf = () => (
  <CheckAnswersSprocket
    title='Boolean - Boolean - One Of'
    checkAnswers={[BOOLEAN_BOOLEAN_ONE_OF]}
  />
)

BooleanBooleanOneOf.storyName = 'Boolean - One Of'
BooleanBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanAllOf = () => (
  <CheckAnswersSprocket
    title='Boolean - Boolean - All Of'
    checkAnswers={[BOOLEAN_BOOLEAN_ALL_OF]}
  />
)

BooleanBooleanAllOf.storyName = 'Boolean - All Of'
BooleanBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}
