import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import {
  CheckAnswersSprocket
} from 'shinkansen-sprockets'

import OBJECT_STRING from 'stories/definitions/check-answers/object-string'
import OBJECT_NUMBER from 'stories/definitions/check-answers/object-number'

import OBJECT_OBJECT_STRING from 'stories/definitions/check-answers/object-object-string'
import OBJECT_OBJECT_NUMBER from 'stories/definitions/check-answers/object-object-number'
import OBJECT_OBJECT_BOOLEAN from 'stories/definitions/check-answers/object-object-boolean'
import OBJECT_OBJECT_NULL from 'stories/definitions/check-answers/object-object-null'

import OBJECT_ARRAY_OBJECT_STRING from 'stories/definitions/check-answers/object-array-object-string'
import OBJECT_ARRAY_OBJECT_NUMBER from 'stories/definitions/check-answers/object-array-object-number'
import OBJECT_ARRAY_OBJECT_BOOLEAN from 'stories/definitions/check-answers/object-array-object-boolean'
import OBJECT_ARRAY_OBJECT_NULL from 'stories/definitions/check-answers/object-array-object-null'

import OBJECT_ARRAY_ARRAY_STRING from 'stories/definitions/check-answers/object-array-array-string'
import OBJECT_ARRAY_ARRAY_NUMBER from 'stories/definitions/check-answers/object-array-array-number'
import OBJECT_ARRAY_ARRAY_BOOLEAN from 'stories/definitions/check-answers/object-array-array-boolean'
import OBJECT_ARRAY_ARRAY_NULL from 'stories/definitions/check-answers/object-array-array-null'

import OBJECT_BOOLEAN from 'stories/definitions/check-answers/object-boolean'
import OBJECT_NULL from 'stories/definitions/check-answers/object-null'

console.log(OBJECT_ARRAY_ARRAY_STRING)

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
      OBJECT_NUMBER,

      OBJECT_OBJECT_STRING,
      OBJECT_OBJECT_NUMBER,
      OBJECT_OBJECT_BOOLEAN,
      OBJECT_OBJECT_NULL,

      OBJECT_ARRAY_OBJECT_STRING,
      OBJECT_ARRAY_OBJECT_NUMBER,
      OBJECT_ARRAY_OBJECT_BOOLEAN,
      OBJECT_ARRAY_OBJECT_NULL,

      OBJECT_ARRAY_ARRAY_STRING,
      OBJECT_ARRAY_ARRAY_NUMBER,
      OBJECT_ARRAY_ARRAY_BOOLEAN,
      OBJECT_ARRAY_ARRAY_NULL,

      OBJECT_BOOLEAN,
      OBJECT_NULL
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

export const ObjectObject = () => (
  <CheckAnswersSprocket
    title='Object - Object'
    checkAnswers={[
      OBJECT_OBJECT_STRING,
      OBJECT_OBJECT_NUMBER,
      OBJECT_OBJECT_BOOLEAN,
      OBJECT_OBJECT_NULL
    ]}
  />
)

ObjectObject.storyName = 'Object - Object'
ObjectObject.parameters = {
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
