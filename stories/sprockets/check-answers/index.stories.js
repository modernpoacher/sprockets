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

import NUMBER_NUMBER from 'stories/definitions/check-answers/number-number'
import NUMBER_NUMBER_ENUM from 'stories/definitions/check-answers/number-number-enum'
import NUMBER_NUMBER_ANY_OF from 'stories/definitions/check-answers/number-number-any-of'
import NUMBER_NUMBER_ONE_OF from 'stories/definitions/check-answers/number-number-one-of'
import NUMBER_NUMBER_ALL_OF from 'stories/definitions/check-answers/number-number-all-of'

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

import BOOLEAN_BOOLEAN from 'stories/definitions/check-answers/boolean-boolean'
import BOOLEAN_BOOLEAN_ENUM from 'stories/definitions/check-answers/boolean-boolean-enum'
import BOOLEAN_BOOLEAN_ANY_OF from 'stories/definitions/check-answers/boolean-boolean-any-of'
import BOOLEAN_BOOLEAN_ONE_OF from 'stories/definitions/check-answers/boolean-boolean-one-of'
import BOOLEAN_BOOLEAN_ALL_OF from 'stories/definitions/check-answers/boolean-boolean-all-of'

import NULL_NULL from 'stories/definitions/check-answers/null-null'
import NULL_NULL_ENUM from 'stories/definitions/check-answers/null-null-enum'
import NULL_NULL_ANY_OF from 'stories/definitions/check-answers/null-null-any-of'
import NULL_NULL_ONE_OF from 'stories/definitions/check-answers/null-null-one-of'
import NULL_NULL_ALL_OF from 'stories/definitions/check-answers/null-null-all-of'

export default {
  title: 'Components/Check Answers',
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
      STRING_STRING_ALL_OF,

      NUMBER_NUMBER,
      NUMBER_NUMBER_ENUM,
      NUMBER_NUMBER_ANY_OF,
      NUMBER_NUMBER_ONE_OF,
      NUMBER_NUMBER_ALL_OF,

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
      OBJECT_NULL,

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
      ARRAY_ARRAY_ARRAY_NULL,

      BOOLEAN_BOOLEAN,
      BOOLEAN_BOOLEAN_ENUM,
      BOOLEAN_BOOLEAN_ANY_OF,
      BOOLEAN_BOOLEAN_ONE_OF,
      BOOLEAN_BOOLEAN_ALL_OF,

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
