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
import ARRAY_ARRAY_OBJECT_STRING_ALL_OF from 'stories/definitions/check-answers/array-array-object-string-all-of'

import ARRAY_ARRAY_OBJECT_NUMBER from 'stories/definitions/check-answers/array-array-object-number'
import ARRAY_ARRAY_OBJECT_NUMBER_ENUM from 'stories/definitions/check-answers/array-array-object-number-enum'
import ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF from 'stories/definitions/check-answers/array-array-object-number-any-of'
import ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF from 'stories/definitions/check-answers/array-array-object-number-one-of'
import ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF from 'stories/definitions/check-answers/array-array-object-number-all-of'

import ARRAY_ARRAY_OBJECT_BOOLEAN from 'stories/definitions/check-answers/array-array-object-boolean'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM from 'stories/definitions/check-answers/array-array-object-boolean-enum'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF from 'stories/definitions/check-answers/array-array-object-boolean-any-of'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF from 'stories/definitions/check-answers/array-array-object-boolean-one-of'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF from 'stories/definitions/check-answers/array-array-object-boolean-all-of'

import ARRAY_ARRAY_OBJECT_NULL from 'stories/definitions/check-answers/array-array-object-null'
import ARRAY_ARRAY_OBJECT_NULL_ENUM from 'stories/definitions/check-answers/array-array-object-null-enum'
import ARRAY_ARRAY_OBJECT_NULL_ANY_OF from 'stories/definitions/check-answers/array-array-object-null-any-of'
import ARRAY_ARRAY_OBJECT_NULL_ONE_OF from 'stories/definitions/check-answers/array-array-object-null-one-of'
import ARRAY_ARRAY_OBJECT_NULL_ALL_OF from 'stories/definitions/check-answers/array-array-object-null-all-of'

import ARRAY_ARRAY_ARRAY_STRING from 'stories/definitions/check-answers/array-array-array-string'
import ARRAY_ARRAY_ARRAY_STRING_ENUM from 'stories/definitions/check-answers/array-array-array-string-enum'
import ARRAY_ARRAY_ARRAY_STRING_ANY_OF from 'stories/definitions/check-answers/array-array-array-string-any-of'
import ARRAY_ARRAY_ARRAY_STRING_ONE_OF from 'stories/definitions/check-answers/array-array-array-string-one-of'
import ARRAY_ARRAY_ARRAY_STRING_ALL_OF from 'stories/definitions/check-answers/array-array-array-string-all-of'

import ARRAY_ARRAY_ARRAY_NUMBER from 'stories/definitions/check-answers/array-array-array-number'
import ARRAY_ARRAY_ARRAY_NUMBER_ENUM from 'stories/definitions/check-answers/array-array-array-number-enum'
import ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF from 'stories/definitions/check-answers/array-array-array-number-any-of'
import ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF from 'stories/definitions/check-answers/array-array-array-number-one-of'
import ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF from 'stories/definitions/check-answers/array-array-array-number-all-of'

import ARRAY_ARRAY_ARRAY_BOOLEAN from 'stories/definitions/check-answers/array-array-array-boolean'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM from 'stories/definitions/check-answers/array-array-array-boolean-enum'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF from 'stories/definitions/check-answers/array-array-array-boolean-any-of'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF from 'stories/definitions/check-answers/array-array-array-boolean-one-of'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF from 'stories/definitions/check-answers/array-array-array-boolean-all-of'

import ARRAY_ARRAY_ARRAY_NULL from 'stories/definitions/check-answers/array-array-array-null'
import ARRAY_ARRAY_ARRAY_NULL_ENUM from 'stories/definitions/check-answers/array-array-array-null-enum'
import ARRAY_ARRAY_ARRAY_NULL_ANY_OF from 'stories/definitions/check-answers/array-array-array-null-any-of'
import ARRAY_ARRAY_ARRAY_NULL_ONE_OF from 'stories/definitions/check-answers/array-array-array-null-one-of'
import ARRAY_ARRAY_ARRAY_NULL_ALL_OF from 'stories/definitions/check-answers/array-array-array-null-all-of'

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
      ARRAY_ARRAY_OBJECT_STRING_ALL_OF,

      ARRAY_ARRAY_OBJECT_NUMBER,
      ARRAY_ARRAY_OBJECT_NUMBER_ENUM,
      ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF,
      ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF,
      ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF,

      ARRAY_ARRAY_OBJECT_BOOLEAN,
      ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM,
      ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF,
      ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF,
      ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF,

      ARRAY_ARRAY_OBJECT_NULL,
      ARRAY_ARRAY_OBJECT_NULL_ENUM,
      ARRAY_ARRAY_OBJECT_NULL_ANY_OF,
      ARRAY_ARRAY_OBJECT_NULL_ONE_OF,
      ARRAY_ARRAY_OBJECT_NULL_ALL_OF,

      ARRAY_ARRAY_ARRAY_STRING,
      ARRAY_ARRAY_ARRAY_STRING_ENUM,
      ARRAY_ARRAY_ARRAY_STRING_ANY_OF,
      ARRAY_ARRAY_ARRAY_STRING_ONE_OF,
      ARRAY_ARRAY_ARRAY_STRING_ALL_OF,

      ARRAY_ARRAY_ARRAY_NUMBER,
      ARRAY_ARRAY_ARRAY_NUMBER_ENUM,
      ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF,
      ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF,
      ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF,

      ARRAY_ARRAY_ARRAY_BOOLEAN,
      ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM,
      ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF,
      ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF,
      ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF,

      ARRAY_ARRAY_ARRAY_NULL,
      ARRAY_ARRAY_ARRAY_NULL_ENUM,
      ARRAY_ARRAY_ARRAY_NULL_ANY_OF,
      ARRAY_ARRAY_ARRAY_NULL_ONE_OF,
      ARRAY_ARRAY_ARRAY_NULL_ALL_OF
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

export const ArrayArrayItemsIsAnObjectStringAllOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - String - All Of'
    checkAnswers={[ARRAY_ARRAY_OBJECT_STRING_ALL_OF]}
  />
)

ArrayArrayItemsIsAnObjectStringAllOf.storyName = 'Array (Items is an object) - String - All Of'
ArrayArrayItemsIsAnObjectStringAllOf.parameters = {
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

export const ArrayArrayItemsIsAnObjectNumberAllOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Number - All Of'
    checkAnswers={[ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF]}
  />
)

ArrayArrayItemsIsAnObjectNumberAllOf.storyName = 'Array (Items is an object) - Number - All Of'
ArrayArrayItemsIsAnObjectNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBoolean = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Boolean'
    checkAnswers={[ARRAY_ARRAY_OBJECT_BOOLEAN]}
  />
)

ArrayArrayItemsIsAnObjectBoolean.storyName = 'Array (Items is an object) - Boolean'
ArrayArrayItemsIsAnObjectBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanEnum = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Boolean - Enum'
    checkAnswers={[ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM]}
  />
)

ArrayArrayItemsIsAnObjectBooleanEnum.storyName = 'Array (Items is an object) - Boolean - Enum'
ArrayArrayItemsIsAnObjectBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanAnyOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Boolean - Any Of'
    checkAnswers={[ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF]}
  />
)

ArrayArrayItemsIsAnObjectBooleanAnyOf.storyName = 'Array (Items is an object) - Boolean - Any Of'
ArrayArrayItemsIsAnObjectBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanOneOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Boolean - One Of'
    checkAnswers={[ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF]}
  />
)

ArrayArrayItemsIsAnObjectBooleanOneOf.storyName = 'Array (Items is an object) - Boolean - One Of'
ArrayArrayItemsIsAnObjectBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanAllOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Boolean - All Of'
    checkAnswers={[ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF]}
  />
)

ArrayArrayItemsIsAnObjectBooleanAllOf.storyName = 'Array (Items is an object) - Boolean - All Of'
ArrayArrayItemsIsAnObjectBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNull = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Null'
    checkAnswers={[ARRAY_ARRAY_OBJECT_NULL]}
  />
)

ArrayArrayItemsIsAnObjectNull.storyName = 'Array (Items is an object) - Null'
ArrayArrayItemsIsAnObjectNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullEnum = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Null - Enum'
    checkAnswers={[ARRAY_ARRAY_OBJECT_NULL_ENUM]}
  />
)

ArrayArrayItemsIsAnObjectNullEnum.storyName = 'Array (Items is an object) - Null - Enum'
ArrayArrayItemsIsAnObjectNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullAnyOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Null - Any Of'
    checkAnswers={[ARRAY_ARRAY_OBJECT_NULL_ANY_OF]}
  />
)

ArrayArrayItemsIsAnObjectNullAnyOf.storyName = 'Array (Items is an object) - Null - Any Of'
ArrayArrayItemsIsAnObjectNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullOneOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Null - One Of'
    checkAnswers={[ARRAY_ARRAY_OBJECT_NULL_ONE_OF]}
  />
)

ArrayArrayItemsIsAnObjectNullOneOf.storyName = 'Array (Items is an object) - Null - One Of'
ArrayArrayItemsIsAnObjectNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullAllOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an object) - Null - All Of'
    checkAnswers={[ARRAY_ARRAY_OBJECT_NULL_ALL_OF]}
  />
)

ArrayArrayItemsIsAnObjectNullAllOf.storyName = 'Array (Items is an object) - Null - All Of'
ArrayArrayItemsIsAnObjectNullAllOf.parameters = {
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

export const ArrayArrayItemsIsAnArrayStringAllOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - String - All Of'
    checkAnswers={[ARRAY_ARRAY_ARRAY_STRING_ALL_OF]}
  />
)

ArrayArrayItemsIsAnArrayStringAllOf.storyName = 'Array (Items is an array) - String - All Of'
ArrayArrayItemsIsAnArrayStringAllOf.parameters = {
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

export const ArrayArrayItemsIsAnArrayNumberAllOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - Number - All Of'
    checkAnswers={[ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF]}
  />
)

ArrayArrayItemsIsAnArrayNumberAllOf.storyName = 'Array (Items is an array) - Number - All Of'
ArrayArrayItemsIsAnArrayNumberAllOf.parameters = {
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

export const ArrayArrayItemsIsAnArrayBooleanEnum = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - Boolean - Enum'
    checkAnswers={[ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM]}
  />
)

ArrayArrayItemsIsAnArrayBooleanEnum.storyName = 'Array (Items is an array) - Boolean - Enum'
ArrayArrayItemsIsAnArrayBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanAnyOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - Boolean - Any Of'
    checkAnswers={[ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF]}
  />
)

ArrayArrayItemsIsAnArrayBooleanAnyOf.storyName = 'Array (Items is an array) - Boolean - Any Of'
ArrayArrayItemsIsAnArrayBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanOneOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - Boolean - One Of'
    checkAnswers={[ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF]}
  />
)

ArrayArrayItemsIsAnArrayBooleanOneOf.storyName = 'Array (Items is an array) - Boolean - One Of'
ArrayArrayItemsIsAnArrayBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanAllOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - Boolean - All Of'
    checkAnswers={[ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF]}
  />
)

ArrayArrayItemsIsAnArrayBooleanAllOf.storyName = 'Array (Items is an array) - Boolean - All Of'
ArrayArrayItemsIsAnArrayBooleanAllOf.parameters = {
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

export const ArrayArrayItemsIsAnArrayNullEnum = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - Null - Enum'
    checkAnswers={[ARRAY_ARRAY_ARRAY_NULL_ENUM]}
  />
)

ArrayArrayItemsIsAnArrayNullEnum.storyName = 'Array (Items is an array) - Null - Enum'
ArrayArrayItemsIsAnArrayNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullAnyOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - Null - Any Of'
    checkAnswers={[ARRAY_ARRAY_ARRAY_NULL_ANY_OF]}
  />
)

ArrayArrayItemsIsAnArrayNullAnyOf.storyName = 'Array (Items is an array) - Null - Any Of'
ArrayArrayItemsIsAnArrayNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullOneOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - Null - One Of'
    checkAnswers={[ARRAY_ARRAY_ARRAY_NULL_ONE_OF]}
  />
)

ArrayArrayItemsIsAnArrayNullOneOf.storyName = 'Array (Items is an array) - Null - One Of'
ArrayArrayItemsIsAnArrayNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullAllOf = () => (
  <CheckAnswersSprocket
    title='Array - Array (Items is an array) - Null - All Of'
    checkAnswers={[ARRAY_ARRAY_ARRAY_NULL_ALL_OF]}
  />
)

ArrayArrayItemsIsAnArrayNullAllOf.storyName = 'Array (Items is an array) - Null - All Of'
ArrayArrayItemsIsAnArrayNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}
