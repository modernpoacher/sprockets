import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import {
  CheckAnswersSprocket
} from 'shinkansen-sprockets'

import ARRAY_ARRAY_OBJECT_STRING from 'stories/definitions/check-answers/array-array-object-string'
import ARRAY_ARRAY_OBJECT_STRING_ENUM from 'stories/definitions/check-answers/array-array-object-string-enum'
import ARRAY_ARRAY_OBJECT_STRING_ANY_OF from 'stories/definitions/check-answers/array-array-object-string-any-of'
import ARRAY_ARRAY_OBJECT_STRING_ONE_OF from 'stories/definitions/check-answers/array-array-object-string-one-of'

import ARRAY_ARRAY_OBJECT_NUMBER from 'stories/definitions/check-answers/array-array-object-number'
import ARRAY_ARRAY_OBJECT_NUMBER_ENUM from 'stories/definitions/check-answers/array-array-object-number-enum'
import ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF from 'stories/definitions/check-answers/array-array-object-number-any-of'
import ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF from 'stories/definitions/check-answers/array-array-object-number-one-of'

import ARRAY_ARRAY_OBJECT_OBJECT_STRING from 'stories/definitions/check-answers/array-array-object-object-string'
import ARRAY_ARRAY_OBJECT_OBJECT_NUMBER from 'stories/definitions/check-answers/array-array-object-object-number'
import ARRAY_ARRAY_OBJECT_OBJECT_BOOLEAN from 'stories/definitions/check-answers/array-array-object-object-boolean'
import ARRAY_ARRAY_OBJECT_OBJECT_NULL from 'stories/definitions/check-answers/array-array-object-object-null'

import ARRAY_ARRAY_OBJECT_ARRAY_STRING from 'stories/definitions/check-answers/array-array-object-array-string'
import ARRAY_ARRAY_OBJECT_ARRAY_NUMBER from 'stories/definitions/check-answers/array-array-object-array-number'
import ARRAY_ARRAY_OBJECT_ARRAY_BOOLEAN from 'stories/definitions/check-answers/array-array-object-array-boolean'
import ARRAY_ARRAY_OBJECT_ARRAY_NULL from 'stories/definitions/check-answers/array-array-object-array-null'

import ARRAY_ARRAY_OBJECT_BOOLEAN from 'stories/definitions/check-answers/array-array-object-boolean'
import ARRAY_ARRAY_OBJECT_NULL from 'stories/definitions/check-answers/array-array-object-null'

import ARRAY_ARRAY_ARRAY_STRING from 'stories/definitions/check-answers/array-array-array-string'
import ARRAY_ARRAY_ARRAY_STRING_ENUM from 'stories/definitions/check-answers/array-array-array-string-enum'
import ARRAY_ARRAY_ARRAY_STRING_ANY_OF from 'stories/definitions/check-answers/array-array-array-string-any-of'
import ARRAY_ARRAY_ARRAY_STRING_ONE_OF from 'stories/definitions/check-answers/array-array-array-string-one-of'

import ARRAY_ARRAY_ARRAY_NUMBER from 'stories/definitions/check-answers/array-array-array-number'
import ARRAY_ARRAY_ARRAY_NUMBER_ENUM from 'stories/definitions/check-answers/array-array-array-number-enum'
import ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF from 'stories/definitions/check-answers/array-array-array-number-any-of'
import ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF from 'stories/definitions/check-answers/array-array-array-number-one-of'

import ARRAY_ARRAY_ARRAY_OBJECT_STRING from 'stories/definitions/check-answers/array-array-array-object-string'
import ARRAY_ARRAY_ARRAY_OBJECT_NUMBER from 'stories/definitions/check-answers/array-array-array-object-number'
import ARRAY_ARRAY_ARRAY_OBJECT_BOOLEAN from 'stories/definitions/check-answers/array-array-array-object-boolean'
import ARRAY_ARRAY_ARRAY_OBJECT_NULL from 'stories/definitions/check-answers/array-array-array-object-null'

import ARRAY_ARRAY_ARRAY_ARRAY_STRING from 'stories/definitions/check-answers/array-array-array-array-string'
import ARRAY_ARRAY_ARRAY_ARRAY_NUMBER from 'stories/definitions/check-answers/array-array-array-array-number'
import ARRAY_ARRAY_ARRAY_ARRAY_BOOLEAN from 'stories/definitions/check-answers/array-array-array-array-boolean'
import ARRAY_ARRAY_ARRAY_ARRAY_NULL from 'stories/definitions/check-answers/array-array-array-array-null'

import ARRAY_ARRAY_ARRAY_BOOLEAN from 'stories/definitions/check-answers/array-array-array-boolean'
import ARRAY_ARRAY_ARRAY_NULL from 'stories/definitions/check-answers/array-array-array-null'

export default {
  title: 'Components/Check Answers/Array',
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
      ARRAY_ARRAY_OBJECT_STRING,
      ARRAY_ARRAY_OBJECT_STRING_ENUM,
      ARRAY_ARRAY_OBJECT_STRING_ANY_OF,
      ARRAY_ARRAY_OBJECT_STRING_ONE_OF,

      ARRAY_ARRAY_OBJECT_NUMBER,
      ARRAY_ARRAY_OBJECT_NUMBER_ENUM,
      ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF,
      ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF,

      ARRAY_ARRAY_OBJECT_OBJECT_STRING,
      ARRAY_ARRAY_OBJECT_OBJECT_NUMBER,
      ARRAY_ARRAY_OBJECT_OBJECT_BOOLEAN,
      ARRAY_ARRAY_OBJECT_OBJECT_NULL,

      ARRAY_ARRAY_OBJECT_ARRAY_STRING,
      ARRAY_ARRAY_OBJECT_ARRAY_NUMBER,
      ARRAY_ARRAY_OBJECT_ARRAY_BOOLEAN,
      ARRAY_ARRAY_OBJECT_ARRAY_NULL,

      ARRAY_ARRAY_OBJECT_BOOLEAN,
      ARRAY_ARRAY_OBJECT_NULL,

      ARRAY_ARRAY_ARRAY_STRING,
      ARRAY_ARRAY_ARRAY_STRING_ENUM,
      ARRAY_ARRAY_ARRAY_STRING_ANY_OF,
      ARRAY_ARRAY_ARRAY_STRING_ONE_OF,

      ARRAY_ARRAY_ARRAY_NUMBER,
      ARRAY_ARRAY_ARRAY_NUMBER_ENUM,
      ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF,
      ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF,

      ARRAY_ARRAY_ARRAY_OBJECT_STRING,
      ARRAY_ARRAY_ARRAY_OBJECT_NUMBER,
      ARRAY_ARRAY_ARRAY_OBJECT_BOOLEAN,
      ARRAY_ARRAY_ARRAY_OBJECT_NULL,

      ARRAY_ARRAY_ARRAY_ARRAY_STRING,
      ARRAY_ARRAY_ARRAY_ARRAY_NUMBER,
      ARRAY_ARRAY_ARRAY_ARRAY_BOOLEAN,
      ARRAY_ARRAY_ARRAY_ARRAY_NULL,

      ARRAY_ARRAY_ARRAY_BOOLEAN,
      ARRAY_ARRAY_ARRAY_NULL
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

export const ArrayArrayItemsIsAnObjectString = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - String'
    checkAnswers={[ARRAY_ARRAY_OBJECT_STRING]}
  />
)

ArrayArrayItemsIsAnObjectString.storyName = 'Array (Items is an object) - String'
ArrayArrayItemsIsAnObjectString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringEnum = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - String - Enum'
    checkAnswers={[ARRAY_ARRAY_OBJECT_STRING_ENUM]}
  />
)

ArrayArrayItemsIsAnObjectStringEnum.storyName = 'Array (Items is an object) - String - Enum'
ArrayArrayItemsIsAnObjectStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringAnyOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - String - Any Of'
    checkAnswers={[ARRAY_ARRAY_OBJECT_STRING_ANY_OF]}
  />
)

ArrayArrayItemsIsAnObjectStringAnyOf.storyName = 'Array (Items is an object) - String - Any Of'
ArrayArrayItemsIsAnObjectStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringOneOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - String - One Of'
    checkAnswers={[ARRAY_ARRAY_OBJECT_STRING_ONE_OF]}
  />
)

ArrayArrayItemsIsAnObjectStringOneOf.storyName = 'Array (Items is an object) - String - One Of'
ArrayArrayItemsIsAnObjectStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumber = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Number'
    checkAnswers={[ARRAY_ARRAY_OBJECT_NUMBER]}
  />
)

ArrayArrayItemsIsAnObjectNumber.storyName = 'Array (Items is an object) - Number'
ArrayArrayItemsIsAnObjectNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberEnum = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Number - Enum'
    checkAnswers={[ARRAY_ARRAY_OBJECT_NUMBER_ENUM]}
  />
)

ArrayArrayItemsIsAnObjectNumberEnum.storyName = 'Array (Items is an object) - Number - Enum'
ArrayArrayItemsIsAnObjectNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberAnyOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Number - Any Of'
    checkAnswers={[ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF]}
  />
)

ArrayArrayItemsIsAnObjectNumberAnyOf.storyName = 'Array (Items is an object) - Number - Any Of'
ArrayArrayItemsIsAnObjectNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberOneOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Number - One Of'
    checkAnswers={[ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF]}
  />
)

ArrayArrayItemsIsAnObjectNumberOneOf.storyName = 'Array (Items is an object) - Number - One Of'
ArrayArrayItemsIsAnObjectNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectObject = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Object'
    checkAnswers={[
      ARRAY_ARRAY_OBJECT_OBJECT_STRING,
      ARRAY_ARRAY_OBJECT_OBJECT_NUMBER,
      ARRAY_ARRAY_OBJECT_OBJECT_BOOLEAN,
      ARRAY_ARRAY_OBJECT_OBJECT_NULL
    ]}
  />
)

ArrayArrayItemsIsAnObjectObject.storyName = 'Array (Items is an object) - Number - One Of'
ArrayArrayItemsIsAnObjectObject.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectArray = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Array'
    checkAnswers={[
      ARRAY_ARRAY_OBJECT_ARRAY_STRING,
      ARRAY_ARRAY_OBJECT_ARRAY_NUMBER,
      ARRAY_ARRAY_OBJECT_ARRAY_BOOLEAN,
      ARRAY_ARRAY_OBJECT_ARRAY_NULL
    ]}
  />
)

ArrayArrayItemsIsAnObjectArray.storyName = 'Array (Items is an object) - Number - One Of'
ArrayArrayItemsIsAnObjectArray.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBoolean = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Boolean'
    checkAnswers={[ARRAY_ARRAY_OBJECT_BOOLEAN]}
  />
)

ArrayArrayItemsIsAnObjectBoolean.storyName = 'Array (Items is an object) - Number - One Of'
ArrayArrayItemsIsAnObjectBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNull = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Null'
    checkAnswers={[ARRAY_ARRAY_OBJECT_NULL]}
  />
)

ArrayArrayItemsIsAnObjectNull.storyName = 'Array (Items is an object) - Number - One Of'
ArrayArrayItemsIsAnObjectNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayString = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - String'
    checkAnswers={[ARRAY_ARRAY_ARRAY_STRING]}
  />
)

ArrayArrayItemsIsAnArrayString.storyName = 'Array (Items is an array) - String'
ArrayArrayItemsIsAnArrayString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringEnum = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - String - Enum'
    checkAnswers={[ARRAY_ARRAY_ARRAY_STRING_ENUM]}
  />
)

ArrayArrayItemsIsAnArrayStringEnum.storyName = 'Array (Items is an array) - String - Enum'
ArrayArrayItemsIsAnArrayStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringAnyOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - String - Any Of'
    checkAnswers={[ARRAY_ARRAY_ARRAY_STRING_ANY_OF]}
  />
)

ArrayArrayItemsIsAnArrayStringAnyOf.storyName = 'Array (Items is an array) - String - Any Of'
ArrayArrayItemsIsAnArrayStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringOneOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - String - One Of'
    checkAnswers={[ARRAY_ARRAY_ARRAY_STRING_ONE_OF]}
  />
)

ArrayArrayItemsIsAnArrayStringOneOf.storyName = 'Array (Items is an array) - String - One Of'
ArrayArrayItemsIsAnArrayStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumber = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - Number'
    checkAnswers={[ARRAY_ARRAY_ARRAY_NUMBER]}
  />
)

ArrayArrayItemsIsAnArrayNumber.storyName = 'Array (Items is an array) - Number'
ArrayArrayItemsIsAnArrayNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberEnum = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - Number - Enum'
    checkAnswers={[ARRAY_ARRAY_ARRAY_NUMBER_ENUM]}
  />
)

ArrayArrayItemsIsAnArrayNumberEnum.storyName = 'Array (Items is an array) - Number - Enum'
ArrayArrayItemsIsAnArrayNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberAnyOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - Number - Any Of'
    checkAnswers={[ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF]}
  />
)

ArrayArrayItemsIsAnArrayNumberAnyOf.storyName = 'Array (Items is an array) - Number - Any Of'
ArrayArrayItemsIsAnArrayNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberOneOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - Number - One Of'
    checkAnswers={[ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF]}
  />
)

ArrayArrayItemsIsAnArrayNumberOneOf.storyName = 'Array (Items is an array) - Number - One Of'
ArrayArrayItemsIsAnArrayNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayObject = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - Object'
    checkAnswers={[
      ARRAY_ARRAY_ARRAY_OBJECT_STRING,
      ARRAY_ARRAY_ARRAY_OBJECT_NUMBER,
      ARRAY_ARRAY_ARRAY_OBJECT_BOOLEAN,
      ARRAY_ARRAY_ARRAY_OBJECT_NULL
    ]}
  />
)

ArrayArrayItemsIsAnArrayObject.storyName = 'Array (Items is an array) - Object'
ArrayArrayItemsIsAnArrayObject.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayArray = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - Array'
    checkAnswers={[
      ARRAY_ARRAY_ARRAY_ARRAY_STRING,
      ARRAY_ARRAY_ARRAY_ARRAY_NUMBER,
      ARRAY_ARRAY_ARRAY_ARRAY_BOOLEAN,
      ARRAY_ARRAY_ARRAY_ARRAY_NULL
    ]}
  />
)

ArrayArrayItemsIsAnArrayArray.storyName = 'Array (Items is an array) - Array'
ArrayArrayItemsIsAnArrayArray.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBoolean = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - Boolean'
    checkAnswers={[ARRAY_ARRAY_ARRAY_BOOLEAN]}
  />
)

ArrayArrayItemsIsAnArrayBoolean.storyName = 'Array (Items is an array) - Boolean'
ArrayArrayItemsIsAnArrayBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNull = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - Null'
    checkAnswers={[ARRAY_ARRAY_ARRAY_NULL]}
  />
)

ArrayArrayItemsIsAnArrayNull.storyName = 'Array (Items is an array) - Null'
ArrayArrayItemsIsAnArrayNull.parameters = {
  controls: { hideNoControlsWarning: true }
}
