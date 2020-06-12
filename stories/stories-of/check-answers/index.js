import React from 'react'

import { storiesOf } from '@storybook/react'
import StorybookReactRouter from 'storybook-react-router'

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

import OBJECT_OBJECT_STRING from 'stories/definitions/check-answers/object-object-string'
import OBJECT_OBJECT_NUMBER from 'stories/definitions/check-answers/object-object-number'

import OBJECT_OBJECT_OBJECT_STRING from 'stories/definitions/check-answers/object-object-object-string'
import OBJECT_OBJECT_OBJECT_NUMBER from 'stories/definitions/check-answers/object-object-object-number'
import OBJECT_OBJECT_OBJECT_BOOLEAN from 'stories/definitions/check-answers/object-object-object-boolean'
import OBJECT_OBJECT_OBJECT_NULL from 'stories/definitions/check-answers/object-object-object-null'

import OBJECT_OBJECT_ARRAY_OBJECT_STRING from 'stories/definitions/check-answers/object-object-array-object-string'
import OBJECT_OBJECT_ARRAY_OBJECT_NUMBER from 'stories/definitions/check-answers/object-object-array-object-number'
import OBJECT_OBJECT_ARRAY_OBJECT_BOOLEAN from 'stories/definitions/check-answers/object-object-array-object-boolean'
import OBJECT_OBJECT_ARRAY_OBJECT_NULL from 'stories/definitions/check-answers/object-object-array-object-null'

import OBJECT_OBJECT_ARRAY_ARRAY_STRING from 'stories/definitions/check-answers/object-object-array-array-string'
import OBJECT_OBJECT_ARRAY_ARRAY_NUMBER from 'stories/definitions/check-answers/object-object-array-array-number'
import OBJECT_OBJECT_ARRAY_ARRAY_BOOLEAN from 'stories/definitions/check-answers/object-object-array-array-boolean'
import OBJECT_OBJECT_ARRAY_ARRAY_NULL from 'stories/definitions/check-answers/object-object-array-array-null'

import OBJECT_OBJECT_BOOLEAN from 'stories/definitions/check-answers/object-object-boolean'
import OBJECT_OBJECT_NULL from 'stories/definitions/check-answers/object-object-null'

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

storiesOf('Check Answers Sprocket', module)
  .addDecorator(StorybookReactRouter())
  .add('String - String', () => (
    <CheckAnswersSprocket
      title='String - String'
      checkAnswers={[STRING_STRING]}
    />
  ))
  .add('String - String - Enum', () => (
    <CheckAnswersSprocket
      title='String - String - Enum'
      checkAnswers={[STRING_STRING_ENUM]}
    />
  ))
  .add('String - String - Any Of', () => (
    <CheckAnswersSprocket
      title='String - String - Any Of'
      checkAnswers={[STRING_STRING_ANY_OF]}
    />
  ))
  .add('String - String - One Of', () => (
    <CheckAnswersSprocket
      title='String - String - One Of'
      checkAnswers={[STRING_STRING_ONE_OF]}
    />
  ))
  .add('String - String - All Of', () => (
    <CheckAnswersSprocket
      title='String - String - All Of'
      checkAnswers={[STRING_STRING_ALL_OF]}
    />
  ))
  .add('Number - Number', () => (
    <CheckAnswersSprocket
      title='Number - Number'
      checkAnswers={[NUMBER_NUMBER]}
    />
  ))
  .add('Number - Number - Enum', () => (
    <CheckAnswersSprocket
      title='Number - Number - Enum'
      checkAnswers={[NUMBER_NUMBER_ENUM]}
    />
  ))
  .add('Number - Number - Any Of', () => (
    <CheckAnswersSprocket
      title='Number - Number - Any Of'
      checkAnswers={[NUMBER_NUMBER_ANY_OF]}
    />
  ))
  .add('Number - Number - One Of', () => (
    <CheckAnswersSprocket
      title='Number - Number - One Of'
      checkAnswers={[NUMBER_NUMBER_ONE_OF]}
    />
  ))
  .add('Number - Number - All Of', () => (
    <CheckAnswersSprocket
      title='Number - Number - All Of'
      checkAnswers={[NUMBER_NUMBER_ALL_OF]}
    />
  ))
  .add('Object - String', () => (
    <CheckAnswersSprocket
      title='Object - String'
      checkAnswers={[OBJECT_OBJECT_STRING]}
    />
  ))
  .add('Object - Number', () => (
    <CheckAnswersSprocket
      title='Object - Number'
      checkAnswers={[OBJECT_OBJECT_NUMBER]}
    />
  ))
  .add('Object - Object', () => (
    <CheckAnswersSprocket
      title='Object - Object'
      checkAnswers={[
        OBJECT_OBJECT_OBJECT_STRING,
        OBJECT_OBJECT_OBJECT_NUMBER,
        OBJECT_OBJECT_OBJECT_BOOLEAN,
        OBJECT_OBJECT_OBJECT_NULL
      ]}
    />
  ))
  .add('Object - Array (Items is an object) - String', () => (
    <CheckAnswersSprocket
      title='Object - Array (Items is an object) - String'
      checkAnswers={[OBJECT_OBJECT_ARRAY_OBJECT_STRING]}
    />
  ))
  .add('Object - Array (Items is an object) - Number', () => (
    <CheckAnswersSprocket
      title='Object - Array (Items is an object) - Number'
      checkAnswers={[OBJECT_OBJECT_ARRAY_OBJECT_NUMBER]}
    />
  ))
  .add('Object - Array (Items is an object) - Boolean', () => (
    <CheckAnswersSprocket
      title='Object - Array (Items is an object) - Boolean'
      checkAnswers={[OBJECT_OBJECT_ARRAY_OBJECT_BOOLEAN]}
    />
  ))
  .add('Object - Array (Items is an object) - Null', () => (
    <CheckAnswersSprocket
      title='Object - Array (Items is an object) - Null'
      checkAnswers={[OBJECT_OBJECT_ARRAY_OBJECT_NULL]}
    />
  ))
  .add('Object - Array (Items is an array) - String', () => (
    <CheckAnswersSprocket
      title='Object - Array (Items is an array) - String'
      checkAnswers={[OBJECT_OBJECT_ARRAY_ARRAY_STRING]}
    />
  ))
  .add('Object - Array (Items is an array) - Number', () => (
    <CheckAnswersSprocket
      title='Object - Array (Items is an array) - Number'
      checkAnswers={[OBJECT_OBJECT_ARRAY_ARRAY_NUMBER]}
    />
  ))
  .add('Object - Array (Items is an array) - Boolean', () => (
    <CheckAnswersSprocket
      title='Object - Array (Items is an array) - Boolean'
      checkAnswers={[OBJECT_OBJECT_ARRAY_ARRAY_BOOLEAN]}
    />
  ))
  .add('Object - Array (Items is an array) - Null', () => (
    <CheckAnswersSprocket
      title='Object - Array (Items is an array) - Null'
      checkAnswers={[OBJECT_OBJECT_ARRAY_ARRAY_NULL]}
    />
  ))
  .add('Object - Boolean', () => (
    <CheckAnswersSprocket
      title='Object - Boolean'
      checkAnswers={[OBJECT_OBJECT_BOOLEAN]}
    />
  ))
  .add('Object - Null', () => (
    <CheckAnswersSprocket
      title='Object - Null'
      checkAnswers={[OBJECT_OBJECT_NULL]}
    />
  ))
  .add('Array - Array (Items is an object) - String', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an object) - String'
      checkAnswers={[ARRAY_ARRAY_OBJECT_STRING]}
    />
  ))
  .add('Array - Array (Items is an object) - String - Enum', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an object) - String - Enum'
      checkAnswers={[ARRAY_ARRAY_OBJECT_STRING_ENUM]}
    />
  ))
  .add('Array - Array (Items is an object) - String - Any Of', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an object) - String - Any Of'
      checkAnswers={[ARRAY_ARRAY_OBJECT_STRING_ANY_OF]}
    />
  ))
  .add('Array - Array (Items is an object) - String - One Of', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an object) - String - One Of'
      checkAnswers={[ARRAY_ARRAY_OBJECT_STRING_ONE_OF]}
    />
  ))
  .add('Array - Array (Items is an object) - Number', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an object) - Number'
      checkAnswers={[ARRAY_ARRAY_OBJECT_NUMBER]}
    />
  ))
  .add('Array - Array (Items is an object) - Number - Enum', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an object) - Number - Enum'
      checkAnswers={[ARRAY_ARRAY_OBJECT_NUMBER_ENUM]}
    />
  ))
  .add('Array - Array (Items is an object) - Number - Any Of', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an object) - Number - Any Of'
      checkAnswers={[ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF]}
    />
  ))
  .add('Array - Array (Items is an object) - Number - One Of', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an object) - Number - One Of'
      checkAnswers={[ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF]}
    />
  ))
  .add('Array - Array (Items is an object) - Object', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an object) - Object'
      checkAnswers={[
        ARRAY_ARRAY_OBJECT_OBJECT_STRING,
        ARRAY_ARRAY_OBJECT_OBJECT_NUMBER,
        ARRAY_ARRAY_OBJECT_OBJECT_BOOLEAN,
        ARRAY_ARRAY_OBJECT_OBJECT_NULL
      ]}
    />
  ))
  .add('Array - Array (Items is an object) - Array', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an object) - Array'
      checkAnswers={[
        ARRAY_ARRAY_OBJECT_ARRAY_STRING,
        ARRAY_ARRAY_OBJECT_ARRAY_NUMBER,
        ARRAY_ARRAY_OBJECT_ARRAY_BOOLEAN,
        ARRAY_ARRAY_OBJECT_ARRAY_NULL
      ]}
    />
  ))
  .add('Array - Array (Items is an object) - Boolean', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an object) - Boolean'
      checkAnswers={[ARRAY_ARRAY_OBJECT_BOOLEAN]}
    />
  ))
  .add('Array - Array (Items is an object) - Null', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an object) - Null'
      checkAnswers={[ARRAY_ARRAY_OBJECT_NULL]}
    />
  ))
  .add('Array - Array (Items is an array) - String', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an array) - String'
      checkAnswers={[ARRAY_ARRAY_ARRAY_STRING]}
    />
  ))
  .add('Array - Array (Items is an array) - String - Enum', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an array) - String - Enum'
      checkAnswers={[ARRAY_ARRAY_ARRAY_STRING_ENUM]}
    />
  ))
  .add('Array - Array (Items is an array) - String - Any Of', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an array) - String - Any Of'
      checkAnswers={[ARRAY_ARRAY_ARRAY_STRING_ANY_OF]}
    />
  ))
  .add('Array - Array (Items is an array) - String - One Of', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an array) - String - One Of'
      checkAnswers={[ARRAY_ARRAY_ARRAY_STRING_ONE_OF]}
    />
  ))
  .add('Array - Array (Items is an array) - Number', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an array) - Number'
      checkAnswers={[ARRAY_ARRAY_ARRAY_NUMBER]}
    />
  ))
  .add('Array - Array (Items is an array) - Number - Enum', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an array) - Number - Enum'
      checkAnswers={[ARRAY_ARRAY_ARRAY_NUMBER_ENUM]}
    />
  ))
  .add('Array - Array (Items is an array) - Number - Any Of', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an array) - Number - Any Of'
      checkAnswers={[ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF]}
    />
  ))
  .add('Array - Array (Items is an array) - Number - One Of', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an array) - Number - One Of'
      checkAnswers={[ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF]}
    />
  ))
  .add('Array - Array (Items is an array) - Object', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an array) - Object'
      checkAnswers={[
        ARRAY_ARRAY_ARRAY_OBJECT_STRING,
        ARRAY_ARRAY_ARRAY_OBJECT_NUMBER,
        ARRAY_ARRAY_ARRAY_OBJECT_BOOLEAN,
        ARRAY_ARRAY_ARRAY_OBJECT_NULL
      ]}
    />
  ))
  .add('Array - Array (Items is an array) - Array', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an array) - Array'
      checkAnswers={[
        ARRAY_ARRAY_ARRAY_ARRAY_STRING,
        ARRAY_ARRAY_ARRAY_ARRAY_NUMBER,
        ARRAY_ARRAY_ARRAY_ARRAY_BOOLEAN,
        ARRAY_ARRAY_ARRAY_ARRAY_NULL
      ]}
    />
  ))
  .add('Array - Array (Items is an array) - Boolean', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an array) - Boolean'
      checkAnswers={[ARRAY_ARRAY_ARRAY_BOOLEAN]}
    />
  ))
  .add('Array - Array (Items is an array) - Null', () => (
    <CheckAnswersSprocket
      title='Array - Array (Items is an array) - Null'
      checkAnswers={[ARRAY_ARRAY_ARRAY_NULL]}
    />
  ))
  .add('Boolean - Boolean', () => (
    <CheckAnswersSprocket
      title='Boolean - Boolean'
      checkAnswers={[BOOLEAN_BOOLEAN]}
    />
  ))
  .add('Boolean - Boolean - Enum', () => (
    <CheckAnswersSprocket
      title='Boolean - Boolean - Enum'
      checkAnswers={[BOOLEAN_BOOLEAN_ENUM]}
    />
  ))
  .add('Boolean - Boolean - Any Of', () => (
    <CheckAnswersSprocket
      title='Boolean - Boolean - Any Of'
      checkAnswers={[BOOLEAN_BOOLEAN_ANY_OF]}
    />
  ))
  .add('Boolean - Boolean - One Of', () => (
    <CheckAnswersSprocket
      title='Boolean - Boolean - One Of'
      checkAnswers={[BOOLEAN_BOOLEAN_ONE_OF]}
    />
  ))
  .add('Boolean - Boolean - All Of', () => (
    <CheckAnswersSprocket
      title='Boolean - Boolean - All Of'
      checkAnswers={[BOOLEAN_BOOLEAN_ALL_OF]}
    />
  ))
  .add('Null - Null', () => (
    <CheckAnswersSprocket
      title='Null - Null'
      checkAnswers={[NULL_NULL]}
    />
  ))
  .add('Null - Null - Enum', () => (
    <CheckAnswersSprocket
      title='Null - Null - Enum'
      checkAnswers={[NULL_NULL_ENUM]}
    />
  ))
  .add('Null - Null - Any Of', () => (
    <CheckAnswersSprocket
      title='Null - Null - Any Of'
      checkAnswers={[NULL_NULL_ANY_OF]}
    />
  ))
  .add('Null - Null - One Of', () => (
    <CheckAnswersSprocket
      title='Null - Null - One Of'
      checkAnswers={[NULL_NULL_ONE_OF]}
    />
  ))
  .add('Null - Null - All Of', () => (
    <CheckAnswersSprocket
      title='Null - Null - All Of'
      checkAnswers={[NULL_NULL_ALL_OF]}
    />
  ))
