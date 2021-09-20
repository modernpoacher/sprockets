import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import {
  CheckAnswersSprocket
} from 'shinkansen-sprockets'

import OBJECT_STRING from 'stories/definitions/check-answers/object-string'
import OBJECT_STRING_ENUM from 'stories/definitions/check-answers/object-string-enum'
import OBJECT_STRING_ANY_OF from 'stories/definitions/check-answers/object-string-any-of'
import OBJECT_STRING_ONE_OF from 'stories/definitions/check-answers/object-string-one-of'
import OBJECT_STRING_ALL_OF from 'stories/definitions/check-answers/object-string-all-of'

import OBJECT_NUMBER from 'stories/definitions/check-answers/object-number'
import OBJECT_NUMBER_ENUM from 'stories/definitions/check-answers/object-number-enum'
import OBJECT_NUMBER_ANY_OF from 'stories/definitions/check-answers/object-number-any-of'
import OBJECT_NUMBER_ONE_OF from 'stories/definitions/check-answers/object-number-one-of'
import OBJECT_NUMBER_ALL_OF from 'stories/definitions/check-answers/object-number-all-of'

import OBJECT_ARRAY_OBJECT_STRING from 'stories/definitions/check-answers/object-array-object-string'
import OBJECT_ARRAY_OBJECT_STRING_ENUM from 'stories/definitions/check-answers/object-array-object-string-enum'
import OBJECT_ARRAY_OBJECT_STRING_ANY_OF from 'stories/definitions/check-answers/object-array-object-string-any-of'
import OBJECT_ARRAY_OBJECT_STRING_ONE_OF from 'stories/definitions/check-answers/object-array-object-string-one-of'
import OBJECT_ARRAY_OBJECT_STRING_ALL_OF from 'stories/definitions/check-answers/object-array-object-string-all-of'

import OBJECT_ARRAY_OBJECT_NUMBER from 'stories/definitions/check-answers/object-array-object-number'
import OBJECT_ARRAY_OBJECT_NUMBER_ENUM from 'stories/definitions/check-answers/object-array-object-number-enum'
import OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF from 'stories/definitions/check-answers/object-array-object-number-any-of'
import OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF from 'stories/definitions/check-answers/object-array-object-number-one-of'
import OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF from 'stories/definitions/check-answers/object-array-object-number-all-of'

import OBJECT_ARRAY_OBJECT_BOOLEAN from 'stories/definitions/check-answers/object-array-object-boolean'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM from 'stories/definitions/check-answers/object-array-object-boolean-enum'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF from 'stories/definitions/check-answers/object-array-object-boolean-any-of'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF from 'stories/definitions/check-answers/object-array-object-boolean-one-of'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF from 'stories/definitions/check-answers/object-array-object-boolean-all-of'

import OBJECT_ARRAY_OBJECT_NULL from 'stories/definitions/check-answers/object-array-object-null'
import OBJECT_ARRAY_OBJECT_NULL_ENUM from 'stories/definitions/check-answers/object-array-object-null-enum'
import OBJECT_ARRAY_OBJECT_NULL_ANY_OF from 'stories/definitions/check-answers/object-array-object-null-any-of'
import OBJECT_ARRAY_OBJECT_NULL_ONE_OF from 'stories/definitions/check-answers/object-array-object-null-one-of'
import OBJECT_ARRAY_OBJECT_NULL_ALL_OF from 'stories/definitions/check-answers/object-array-object-null-all-of'

import OBJECT_ARRAY_ARRAY_STRING from 'stories/definitions/check-answers/object-array-array-string'
import OBJECT_ARRAY_ARRAY_STRING_ENUM from 'stories/definitions/check-answers/object-array-array-string-enum'
import OBJECT_ARRAY_ARRAY_STRING_ANY_OF from 'stories/definitions/check-answers/object-array-array-string-any-of'
import OBJECT_ARRAY_ARRAY_STRING_ONE_OF from 'stories/definitions/check-answers/object-array-array-string-one-of'
import OBJECT_ARRAY_ARRAY_STRING_ALL_OF from 'stories/definitions/check-answers/object-array-array-string-all-of'

import OBJECT_ARRAY_ARRAY_NUMBER from 'stories/definitions/check-answers/object-array-array-number'
import OBJECT_ARRAY_ARRAY_NUMBER_ENUM from 'stories/definitions/check-answers/object-array-array-number-enum'
import OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF from 'stories/definitions/check-answers/object-array-array-number-any-of'
import OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF from 'stories/definitions/check-answers/object-array-array-number-one-of'
import OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF from 'stories/definitions/check-answers/object-array-array-number-all-of'

import OBJECT_ARRAY_ARRAY_BOOLEAN from 'stories/definitions/check-answers/object-array-array-boolean'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM from 'stories/definitions/check-answers/object-array-array-boolean-enum'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF from 'stories/definitions/check-answers/object-array-array-boolean-any-of'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF from 'stories/definitions/check-answers/object-array-array-boolean-one-of'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF from 'stories/definitions/check-answers/object-array-array-boolean-all-of'

import OBJECT_ARRAY_ARRAY_NULL from 'stories/definitions/check-answers/object-array-array-null'
import OBJECT_ARRAY_ARRAY_NULL_ENUM from 'stories/definitions/check-answers/object-array-array-null-enum'
import OBJECT_ARRAY_ARRAY_NULL_ANY_OF from 'stories/definitions/check-answers/object-array-array-null-any-of'
import OBJECT_ARRAY_ARRAY_NULL_ONE_OF from 'stories/definitions/check-answers/object-array-array-null-one-of'
import OBJECT_ARRAY_ARRAY_NULL_ALL_OF from 'stories/definitions/check-answers/object-array-array-null-all-of'

import OBJECT_BOOLEAN from 'stories/definitions/check-answers/object-boolean'
import OBJECT_BOOLEAN_ENUM from 'stories/definitions/check-answers/object-boolean-enum'
import OBJECT_BOOLEAN_ANY_OF from 'stories/definitions/check-answers/object-boolean-any-of'
import OBJECT_BOOLEAN_ONE_OF from 'stories/definitions/check-answers/object-boolean-one-of'
import OBJECT_BOOLEAN_ALL_OF from 'stories/definitions/check-answers/object-boolean-all-of'

import OBJECT_NULL from 'stories/definitions/check-answers/object-null'
import OBJECT_NULL_ENUM from 'stories/definitions/check-answers/object-null-enum'
import OBJECT_NULL_ANY_OF from 'stories/definitions/check-answers/object-null-any-of'
import OBJECT_NULL_ONE_OF from 'stories/definitions/check-answers/object-null-one-of'
import OBJECT_NULL_ALL_OF from 'stories/definitions/check-answers/object-null-all-of'

export default {
  title: 'Components/Check Answers/Object',
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
      OBJECT_STRING,
      OBJECT_STRING_ENUM,
      OBJECT_STRING_ANY_OF,
      OBJECT_STRING_ONE_OF,
      OBJECT_STRING_ALL_OF,

      OBJECT_NUMBER,
      OBJECT_NUMBER_ENUM,
      OBJECT_NUMBER_ANY_OF,
      OBJECT_NUMBER_ONE_OF,
      OBJECT_NUMBER_ALL_OF,

      OBJECT_ARRAY_OBJECT_STRING,
      OBJECT_ARRAY_OBJECT_STRING_ENUM,
      OBJECT_ARRAY_OBJECT_STRING_ANY_OF,
      OBJECT_ARRAY_OBJECT_STRING_ONE_OF,
      OBJECT_ARRAY_OBJECT_STRING_ALL_OF,

      OBJECT_ARRAY_OBJECT_NUMBER,
      OBJECT_ARRAY_OBJECT_NUMBER_ENUM,
      OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF,
      OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF,
      OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF,

      OBJECT_ARRAY_OBJECT_BOOLEAN,
      OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM,
      OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF,
      OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF,
      OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF,

      OBJECT_ARRAY_OBJECT_NULL,
      OBJECT_ARRAY_OBJECT_NULL_ENUM,
      OBJECT_ARRAY_OBJECT_NULL_ANY_OF,
      OBJECT_ARRAY_OBJECT_NULL_ONE_OF,
      OBJECT_ARRAY_OBJECT_NULL_ALL_OF,

      OBJECT_ARRAY_ARRAY_STRING,
      OBJECT_ARRAY_ARRAY_STRING_ENUM,
      OBJECT_ARRAY_ARRAY_STRING_ANY_OF,
      OBJECT_ARRAY_ARRAY_STRING_ONE_OF,
      OBJECT_ARRAY_ARRAY_STRING_ALL_OF,

      OBJECT_ARRAY_ARRAY_NUMBER,
      OBJECT_ARRAY_ARRAY_NUMBER_ENUM,
      OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF,
      OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF,
      OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF,

      OBJECT_ARRAY_ARRAY_BOOLEAN,
      OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM,
      OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF,
      OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF,
      OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF,

      OBJECT_ARRAY_ARRAY_NULL,
      OBJECT_ARRAY_ARRAY_NULL_ENUM,
      OBJECT_ARRAY_ARRAY_NULL_ANY_OF,
      OBJECT_ARRAY_ARRAY_NULL_ONE_OF,
      OBJECT_ARRAY_ARRAY_NULL_ALL_OF,

      OBJECT_BOOLEAN,
      OBJECT_BOOLEAN_ENUM,
      OBJECT_BOOLEAN_ANY_OF,
      OBJECT_BOOLEAN_ONE_OF,
      OBJECT_BOOLEAN_ALL_OF,

      OBJECT_NULL,
      OBJECT_NULL_ENUM,
      OBJECT_NULL_ANY_OF,
      OBJECT_NULL_ONE_OF,
      OBJECT_NULL_ALL_OF
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

export const ObjectString = () => (
  <CheckAnswersSprocket
    title='Object - String'
    checkAnswers={[OBJECT_STRING]}
  />
)

ObjectString.storyName = 'Object - String'
ObjectString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringEnum = () => (
  <CheckAnswersSprocket
    title='Object - String - Enum'
    checkAnswers={[OBJECT_STRING_ENUM]}
  />
)

ObjectStringEnum.storyName = 'Object - String - Enum'
ObjectStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringAnyOf = () => (
  <CheckAnswersSprocket
    title='Object - String - Any Of'
    checkAnswers={[OBJECT_STRING_ANY_OF]}
  />
)

ObjectStringAnyOf.storyName = 'Object - String - Any Of'
ObjectStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringOneOf = () => (
  <CheckAnswersSprocket
    title='Object - String - One Of'
    checkAnswers={[OBJECT_STRING_ONE_OF]}
  />
)

ObjectStringOneOf.storyName = 'Object - String - One Of'
ObjectStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringAllOf = () => (
  <CheckAnswersSprocket
    title='Object - String - All Of'
    checkAnswers={[OBJECT_STRING_ALL_OF]}
  />
)

ObjectStringAllOf.storyName = 'Object - String - All Of'
ObjectStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumber = () => (
  <CheckAnswersSprocket
    title='Object - Number'
    checkAnswers={[OBJECT_NUMBER]}
  />
)

ObjectNumber.storyName = 'Object - Number'
ObjectNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberEnum = () => (
  <CheckAnswersSprocket
    title='Object - Number - Enum'
    checkAnswers={[OBJECT_NUMBER_ENUM]}
  />
)

ObjectNumberEnum.storyName = 'Object - Number - Enum'
ObjectNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberAnyOf = () => (
  <CheckAnswersSprocket
    title='Object - Number - Any Of'
    checkAnswers={[OBJECT_NUMBER_ANY_OF]}
  />
)

ObjectNumberAnyOf.storyName = 'Object - Number - Any Of'
ObjectNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberOneOf = () => (
  <CheckAnswersSprocket
    title='Object - Number - One Of'
    checkAnswers={[OBJECT_NUMBER_ONE_OF]}
  />
)

ObjectNumberOneOf.storyName = 'Object - Number - One Of'
ObjectNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberAllOf = () => (
  <CheckAnswersSprocket
    title='Object - Number - All Of'
    checkAnswers={[OBJECT_NUMBER_ALL_OF]}
  />
)

ObjectNumberAllOf.storyName = 'Object - Number - All Of'
ObjectNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectString = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - String'
    checkAnswers={[OBJECT_ARRAY_OBJECT_STRING]}
  />
)

ObjectArrayItemsIsAnObjectString.storyName = 'Object - Array (Items is an object) - String'
ObjectArrayItemsIsAnObjectString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringEnum = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - String - Enum'
    checkAnswers={[OBJECT_ARRAY_OBJECT_STRING_ENUM]}
  />
)

ObjectArrayItemsIsAnObjectStringEnum.storyName = 'Object - Array (Items is an object) - String - Enum'
ObjectArrayItemsIsAnObjectStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringAnyOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - String - Any Of'
    checkAnswers={[OBJECT_ARRAY_OBJECT_STRING_ANY_OF]}
  />
)

ObjectArrayItemsIsAnObjectStringAnyOf.storyName = 'Object - Array (Items is an object) - String - Any Of'
ObjectArrayItemsIsAnObjectStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringOneOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - String - One Of'
    checkAnswers={[OBJECT_ARRAY_OBJECT_STRING_ONE_OF]}
  />
)

ObjectArrayItemsIsAnObjectStringOneOf.storyName = 'Object - Array (Items is an object) - String - One Of'
ObjectArrayItemsIsAnObjectStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringAllOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - String - All Of'
    checkAnswers={[OBJECT_ARRAY_OBJECT_STRING_ALL_OF]}
  />
)

ObjectArrayItemsIsAnObjectStringAllOf.storyName = 'Object - Array (Items is an object) - String - All Of'
ObjectArrayItemsIsAnObjectStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumber = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - Number'
    checkAnswers={[OBJECT_ARRAY_OBJECT_NUMBER]}
  />
)

ObjectArrayItemsIsAnObjectNumber.storyName = 'Object - Array (Items is an object) - Number'
ObjectArrayItemsIsAnObjectNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberEnum = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - Number - Enum'
    checkAnswers={[OBJECT_ARRAY_OBJECT_NUMBER_ENUM]}
  />
)

ObjectArrayItemsIsAnObjectNumberEnum.storyName = 'Object - Array (Items is an object) - Number - Enum'
ObjectArrayItemsIsAnObjectNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberAnyOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - Number - Any Of'
    checkAnswers={[OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF]}
  />
)

ObjectArrayItemsIsAnObjectNumberAnyOf.storyName = 'Object - Array (Items is an object) - Number - Any Of'
ObjectArrayItemsIsAnObjectNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberOneOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - Number - One Of'
    checkAnswers={[OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF]}
  />
)

ObjectArrayItemsIsAnObjectNumberOneOf.storyName = 'Object - Array (Items is an object) - Number - One Of'
ObjectArrayItemsIsAnObjectNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberAllOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - Number - All Of'
    checkAnswers={[OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF]}
  />
)

ObjectArrayItemsIsAnObjectNumberAllOf.storyName = 'Object - Array (Items is an object) - Number - All Of'
ObjectArrayItemsIsAnObjectNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBoolean = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - Boolean'
    checkAnswers={[OBJECT_ARRAY_OBJECT_BOOLEAN]}
  />
)

ObjectArrayItemsIsAnObjectBoolean.storyName = 'Object - Array (Items is an object) - Boolean'
ObjectArrayItemsIsAnObjectBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanEnum = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - Boolean - Enum'
    checkAnswers={[OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM]}
  />
)

ObjectArrayItemsIsAnObjectBooleanEnum.storyName = 'Object - Array (Items is an object) - Boolean - Enum'
ObjectArrayItemsIsAnObjectBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanAnyOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - Boolean - Any Of'
    checkAnswers={[OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF]}
  />
)

ObjectArrayItemsIsAnObjectBooleanAnyOf.storyName = 'Object - Array (Items is an object) - Boolean - Any Of'
ObjectArrayItemsIsAnObjectBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanOneOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - Boolean - One Of'
    checkAnswers={[OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF]}
  />
)

ObjectArrayItemsIsAnObjectBooleanOneOf.storyName = 'Object - Array (Items is an object) - Boolean - One Of'
ObjectArrayItemsIsAnObjectBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanAllOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - Boolean - All Of'
    checkAnswers={[OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF]}
  />
)

ObjectArrayItemsIsAnObjectBooleanAllOf.storyName = 'Object - Array (Items is an object) - Boolean - All Of'
ObjectArrayItemsIsAnObjectBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNull = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - Null'
    checkAnswers={[OBJECT_ARRAY_OBJECT_NULL]}
  />
)

ObjectArrayItemsIsAnObjectNull.storyName = 'Object - Array (Items is an object) - Null'
ObjectArrayItemsIsAnObjectNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullEnum = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - Null - Enum'
    checkAnswers={[OBJECT_ARRAY_OBJECT_NULL_ENUM]}
  />
)

ObjectArrayItemsIsAnObjectNullEnum.storyName = 'Object - Array (Items is an object) - Null - Enum'
ObjectArrayItemsIsAnObjectNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullAnyOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - Null - Any Of'
    checkAnswers={[OBJECT_ARRAY_OBJECT_NULL_ANY_OF]}
  />
)

ObjectArrayItemsIsAnObjectNullAnyOf.storyName = 'Object - Array (Items is an object) - Null - Any Of'
ObjectArrayItemsIsAnObjectNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullOneOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - Null - One Of'
    checkAnswers={[OBJECT_ARRAY_OBJECT_NULL_ONE_OF]}
  />
)

ObjectArrayItemsIsAnObjectNullOneOf.storyName = 'Object - Array (Items is an object) - Null - One Of'
ObjectArrayItemsIsAnObjectNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullAllOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an object) - Null - All Of'
    checkAnswers={[OBJECT_ARRAY_OBJECT_NULL_ALL_OF]}
  />
)

ObjectArrayItemsIsAnObjectNullAllOf.storyName = 'Object - Array (Items is an object) - Null - All Of'
ObjectArrayItemsIsAnObjectNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayString = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - String'
    checkAnswers={[OBJECT_ARRAY_ARRAY_STRING]}
  />
)

ObjectArrayItemsIsAnArrayString.storyName = 'Object - Array (Items is an array) - String'
ObjectArrayItemsIsAnArrayString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringEnum = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - String - Enum'
    checkAnswers={[OBJECT_ARRAY_ARRAY_STRING_ENUM]}
  />
)

ObjectArrayItemsIsAnArrayStringEnum.storyName = 'Object - Array (Items is an array) - String - Enum'
ObjectArrayItemsIsAnArrayStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringAnyOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - String - Any Of'
    checkAnswers={[OBJECT_ARRAY_ARRAY_STRING_ANY_OF]}
  />
)

ObjectArrayItemsIsAnArrayStringAnyOf.storyName = 'Object - Array (Items is an array) - String - Any Of'
ObjectArrayItemsIsAnArrayStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringOneOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - String - One Of'
    checkAnswers={[OBJECT_ARRAY_ARRAY_STRING_ONE_OF]}
  />
)

ObjectArrayItemsIsAnArrayStringOneOf.storyName = 'Object - Array (Items is an array) - String - One Of'
ObjectArrayItemsIsAnArrayStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringAllOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - String - All Of'
    checkAnswers={[OBJECT_ARRAY_ARRAY_STRING_ALL_OF]}
  />
)

ObjectArrayItemsIsAnArrayStringAllOf.storyName = 'Object - Array (Items is an array) - String - All Of'
ObjectArrayItemsIsAnArrayStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumber = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - Number'
    checkAnswers={[OBJECT_ARRAY_ARRAY_NUMBER]}
  />
)

ObjectArrayItemsIsAnArrayNumber.storyName = 'Object - Array (Items is an array) - Number'
ObjectArrayItemsIsAnArrayNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberEnum = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - Number - Enum'
    checkAnswers={[OBJECT_ARRAY_ARRAY_NUMBER_ENUM]}
  />
)

ObjectArrayItemsIsAnArrayNumberEnum.storyName = 'Object - Array (Items is an array) - Number - Enum'
ObjectArrayItemsIsAnArrayNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberAnyOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - Number - Any Of'
    checkAnswers={[OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF]}
  />
)

ObjectArrayItemsIsAnArrayNumberAnyOf.storyName = 'Object - Array (Items is an array) - Number - Any Of'
ObjectArrayItemsIsAnArrayNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberOneOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - Number - One Of'
    checkAnswers={[OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF]}
  />
)

ObjectArrayItemsIsAnArrayNumberOneOf.storyName = 'Object - Array (Items is an array) - Number - One Of'
ObjectArrayItemsIsAnArrayNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberAllOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - Number - All Of'
    checkAnswers={[OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF]}
  />
)

ObjectArrayItemsIsAnArrayNumberAllOf.storyName = 'Object - Array (Items is an array) - Number - All Of'
ObjectArrayItemsIsAnArrayNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBoolean = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - Boolean'
    checkAnswers={[OBJECT_ARRAY_ARRAY_BOOLEAN]}
  />
)

ObjectArrayItemsIsAnArrayBoolean.storyName = 'Object - Array (Items is an array) - Boolean'
ObjectArrayItemsIsAnArrayBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanEnum = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - Boolean - Enum'
    checkAnswers={[OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM]}
  />
)

ObjectArrayItemsIsAnArrayBooleanEnum.storyName = 'Object - Array (Items is an array) - Boolean - Enum'
ObjectArrayItemsIsAnArrayBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanAnyOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - Boolean - Any Of'
    checkAnswers={[OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF]}
  />
)

ObjectArrayItemsIsAnArrayBooleanAnyOf.storyName = 'Object - Array (Items is an array) - Boolean - Any Of'
ObjectArrayItemsIsAnArrayBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanOneOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - Boolean - One Of'
    checkAnswers={[OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF]}
  />
)

ObjectArrayItemsIsAnArrayBooleanOneOf.storyName = 'Object - Array (Items is an array) - Boolean - One Of'
ObjectArrayItemsIsAnArrayBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanAllOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - Boolean - All Of'
    checkAnswers={[OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF]}
  />
)

ObjectArrayItemsIsAnArrayBooleanAllOf.storyName = 'Object - Array (Items is an array) - Boolean - All Of'
ObjectArrayItemsIsAnArrayBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNull = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - Null'
    checkAnswers={[OBJECT_ARRAY_ARRAY_NULL]}
  />
)

ObjectArrayItemsIsAnArrayNull.storyName = 'Object - Array (Items is an array) - Null'
ObjectArrayItemsIsAnArrayNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullEnum = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - Null - Enum'
    checkAnswers={[OBJECT_ARRAY_ARRAY_NULL_ENUM]}
  />
)

ObjectArrayItemsIsAnArrayNullEnum.storyName = 'Object - Array (Items is an array) - Null - Enum'
ObjectArrayItemsIsAnArrayNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullAnyOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - Null - Any Of'
    checkAnswers={[OBJECT_ARRAY_ARRAY_NULL_ANY_OF]}
  />
)

ObjectArrayItemsIsAnArrayNullAnyOf.storyName = 'Object - Array (Items is an array) - Null - Any Of'
ObjectArrayItemsIsAnArrayNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullOneOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - Null - One Of'
    checkAnswers={[OBJECT_ARRAY_ARRAY_NULL_ONE_OF]}
  />
)

ObjectArrayItemsIsAnArrayNullOneOf.storyName = 'Object - Array (Items is an array) - Null - One Of'
ObjectArrayItemsIsAnArrayNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullAllOf = () => (
  <CheckAnswersSprocket
    title='Object - Array (Items is an array) - Null - All Of'
    checkAnswers={[OBJECT_ARRAY_ARRAY_NULL_ALL_OF]}
  />
)

ObjectArrayItemsIsAnArrayNullAllOf.storyName = 'Object - Array (Items is an array) - Null - All Of'
ObjectArrayItemsIsAnArrayNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBoolean = () => (
  <CheckAnswersSprocket
    title='Object - Boolean'
    checkAnswers={[OBJECT_BOOLEAN]}
  />
)

ObjectBoolean.storyName = 'Object - Boolean'
ObjectBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanEnum = () => (
  <CheckAnswersSprocket
    title='Object - Boolean - Enum'
    checkAnswers={[OBJECT_BOOLEAN_ENUM]}
  />
)

ObjectBooleanEnum.storyName = 'Object - Boolean - Enum'
ObjectBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanAnyOf = () => (
  <CheckAnswersSprocket
    title='Object - Boolean - Any Of'
    checkAnswers={[OBJECT_BOOLEAN_ANY_OF]}
  />
)

ObjectBooleanAnyOf.storyName = 'Object - Boolean - Any Of'
ObjectBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanOneOf = () => (
  <CheckAnswersSprocket
    title='Object - Boolean - One Of'
    checkAnswers={[OBJECT_BOOLEAN_ONE_OF]}
  />
)

ObjectBooleanOneOf.storyName = 'Object - Boolean - One Of'
ObjectBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanAllOf = () => (
  <CheckAnswersSprocket
    title='Object - Boolean - All Of'
    checkAnswers={[OBJECT_BOOLEAN_ALL_OF]}
  />
)

ObjectBooleanAllOf.storyName = 'Object - Boolean - All Of'
ObjectBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNull = () => (
  <CheckAnswersSprocket
    title='Object - Null'
    checkAnswers={[OBJECT_NULL]}
  />
)

ObjectNull.storyName = 'Object - Null'
ObjectNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullEnum = () => (
  <CheckAnswersSprocket
    title='Object - Null - Enum'
    checkAnswers={[OBJECT_NULL_ENUM]}
  />
)

ObjectNullEnum.storyName = 'Object - Null - Enum'
ObjectNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullAnyOf = () => (
  <CheckAnswersSprocket
    title='Object - Null - Any Of'
    checkAnswers={[OBJECT_NULL_ANY_OF]}
  />
)

ObjectNullAnyOf.storyName = 'Object - Null - Any Of'
ObjectNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullOneOf = () => (
  <CheckAnswersSprocket
    title='Object - Null - One Of'
    checkAnswers={[OBJECT_NULL_ONE_OF]}
  />
)

ObjectNullOneOf.storyName = 'Object - Null - One Of'
ObjectNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullAllOf = () => (
  <CheckAnswersSprocket
    title='Object - Null - All Of'
    checkAnswers={[OBJECT_NULL_ALL_OF]}
  />
)

ObjectNullAllOf.storyName = 'Object - Null - All Of'
ObjectNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}
