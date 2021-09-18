import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import {
  CheckAnswersSprocket
} from 'shinkansen-sprockets'

import STRING_STRING from 'stories/definitions/check-answers/string-string'
import STRING_STRING_ENUM from 'stories/definitions/check-answers/string-string-enum'
import STRING_STRING_ANY_OF from 'stories/definitions/check-answers/string-string-any-of'
import STRING_STRING_ONE_OF from 'stories/definitions/check-answers/string-string-one-of'
import STRING_STRING_ALL_OF from 'stories/definitions/check-answers/string-string-all-of'

export default {
  title: 'Components/Check Answers/String',
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
      STRING_STRING,
      STRING_STRING_ENUM,
      STRING_STRING_ANY_OF,
      STRING_STRING_ONE_OF,
      STRING_STRING_ALL_OF
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

export const StringString = () => (
  <CheckAnswersSprocket
    title='String - String'
    checkAnswers={[STRING_STRING]}
  />
)

StringString.storyName = 'String'
StringString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringEnum = () => (
  <CheckAnswersSprocket
    title='String - String - Enum'
    checkAnswers={[STRING_STRING_ENUM]}
  />
)

StringStringEnum.storyName = 'String - Enum'
StringStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringAnyOf = () => (
  <CheckAnswersSprocket
    title='String - String - Any Of'
    checkAnswers={[STRING_STRING_ANY_OF]}
  />
)

StringStringAnyOf.storyName = 'String - Any Of'
StringStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringOneOf = () => (
  <CheckAnswersSprocket
    title='String - String - One Of'
    checkAnswers={[STRING_STRING_ONE_OF]}
  />
)

StringStringOneOf.storyName = 'String - One Of'
StringStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringAllOf = () => (
  <CheckAnswersSprocket
    title='String - String - All Of'
    checkAnswers={[STRING_STRING_ALL_OF]}
  />
)

StringStringAllOf.storyName = 'String - All Of'
StringStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}
