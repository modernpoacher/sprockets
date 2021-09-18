import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import {
  CheckAnswersSprocket
} from 'shinkansen-sprockets'

import NUMBER_NUMBER from 'stories/definitions/check-answers/number-number'
import NUMBER_NUMBER_ENUM from 'stories/definitions/check-answers/number-number-enum'
import NUMBER_NUMBER_ANY_OF from 'stories/definitions/check-answers/number-number-any-of'
import NUMBER_NUMBER_ONE_OF from 'stories/definitions/check-answers/number-number-one-of'
import NUMBER_NUMBER_ALL_OF from 'stories/definitions/check-answers/number-number-all-of'

export default {
  title: 'Components/Check Answers/Number',
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
      NUMBER_NUMBER,
      NUMBER_NUMBER_ENUM,
      NUMBER_NUMBER_ANY_OF,
      NUMBER_NUMBER_ONE_OF,
      NUMBER_NUMBER_ALL_OF
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

export const NumberNumber = () => (
  <CheckAnswersSprocket
    title='Number - Number'
    checkAnswers={[NUMBER_NUMBER]}
  />
)

NumberNumber.storyName = 'Number'
NumberNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberEnum = () => (
  <CheckAnswersSprocket
    title='Number - Number - Enum'
    checkAnswers={[NUMBER_NUMBER_ENUM]}
  />
)

NumberNumberEnum.storyName = 'Number - Enum'
NumberNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberAnyOf = () => (
  <CheckAnswersSprocket
    title='Number - Number - Any Of'
    checkAnswers={[NUMBER_NUMBER_ANY_OF]}
  />
)

NumberNumberAnyOf.storyName = 'Number - Any Of'
NumberNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberOneOf = () => (
  <CheckAnswersSprocket
    title='Number - Number - One Of'
    checkAnswers={[NUMBER_NUMBER_ONE_OF]}
  />
)

NumberNumberOneOf.storyName = 'Number - One Of'
NumberNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberAllOf = () => (
  <CheckAnswersSprocket
    title='Number - Number - All Of'
    checkAnswers={[NUMBER_NUMBER_ALL_OF]}
  />
)

NumberNumberAllOf.storyName = 'Number - All Of'
NumberNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}
