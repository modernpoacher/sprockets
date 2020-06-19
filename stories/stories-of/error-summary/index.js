import React from 'react'

import { storiesOf } from '@storybook/react'

import {
  ErrorSummarySprocket
} from 'shinkansen-sprockets'

import ERROR_MAX_ITEMS from 'stories/definitions/error-summary/error-max-items'
import ERROR_MIN_ITEMS from 'stories/definitions/error-summary/error-min-items'
import ERROR_MAX_LENGTH from 'stories/definitions/error-summary/error-max-length'
import ERROR_MIN_LENGTH from 'stories/definitions/error-summary/error-min-length'
import ERROR_MAX_PROPERTIES from 'stories/definitions/error-summary/error-max-properties'
import ERROR_MIN_PROPERTIES from 'stories/definitions/error-summary/error-min-properties'
import ERROR_ADDITIONAL_ITEMS from 'stories/definitions/error-summary/error-additional-items'
import ERROR_MAXIMUM from 'stories/definitions/error-summary/error-maximum'
import ERROR_MINIMUM from 'stories/definitions/error-summary/error-minimum'
import ERROR_FORMAT from 'stories/definitions/error-summary/error-format'
import ERROR_ADDITIONAL_PROPERTIES from 'stories/definitions/error-summary/error-additional-properties'
import ERROR_DEPENDENCIES from 'stories/definitions/error-summary/error-dependencies'
import ERROR_UNIQUE_ITEMS from 'stories/definitions/error-summary/error-unique-items'
import ERROR_PROPERTY_REQUIRED from 'stories/definitions/error-summary/error-property-required'
import ERROR_PROPERTY_NAMES from 'stories/definitions/error-summary/error-property-names'
import ERROR_PATTERN_REQUIRED from 'stories/definitions/error-summary/error-pattern-required'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_STRING from 'stories/definitions/error-summary/error-type-invalid-expected-type-string'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_NUMBER from 'stories/definitions/error-summary/error-type-invalid-expected-type-number'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_OBJECT from 'stories/definitions/error-summary/error-type-invalid-expected-type-object'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_ARRAY from 'stories/definitions/error-summary/error-type-invalid-expected-type-array'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_BOOLEAN from 'stories/definitions/error-summary/error-type-invalid-expected-type-boolean'
import ERROR_TYPE_INVALID_EXPECTED_TYPE_NULL from 'stories/definitions/error-summary/error-type-invalid-expected-type-null'
import ERROR_MULTIPLE_OF from 'stories/definitions/error-summary/error-multiple-of'
import ERROR_PATTERN from 'stories/definitions/error-summary/error-pattern'
import ERROR_CONST from 'stories/definitions/error-summary/error-const'
import ERROR_ENUM from 'stories/definitions/error-summary/error-enum'
import ERROR_$REF from 'stories/definitions/error-summary/error-$ref'
import ERROR_ONE_OF from 'stories/definitions/error-summary/error-one-of'
import ERROR_UNKNOWN from 'stories/definitions/error-summary/error-unknown'

storiesOf('Error Summary Sprocket', module)
  .add('All Errors', () => (
    <ErrorSummarySprocket
      title='All Errors'
      errorSummary={[
        ERROR_MAX_ITEMS,
        ERROR_MIN_ITEMS,
        ERROR_MAX_LENGTH,
        ERROR_MIN_LENGTH,
        ERROR_MAX_PROPERTIES,
        ERROR_MIN_PROPERTIES,
        ERROR_ADDITIONAL_ITEMS,
        ERROR_MAXIMUM,
        ERROR_MINIMUM,
        ERROR_FORMAT,
        ERROR_ADDITIONAL_PROPERTIES,
        ERROR_DEPENDENCIES,
        ERROR_UNIQUE_ITEMS,
        ERROR_PROPERTY_REQUIRED,
        ERROR_PROPERTY_NAMES,
        ERROR_PATTERN_REQUIRED,
        ERROR_TYPE_INVALID_EXPECTED_TYPE_STRING,
        ERROR_TYPE_INVALID_EXPECTED_TYPE_NUMBER,
        ERROR_TYPE_INVALID_EXPECTED_TYPE_OBJECT,
        ERROR_TYPE_INVALID_EXPECTED_TYPE_ARRAY,
        ERROR_TYPE_INVALID_EXPECTED_TYPE_BOOLEAN,
        ERROR_TYPE_INVALID_EXPECTED_TYPE_NULL,
        ERROR_MULTIPLE_OF,
        ERROR_PATTERN,
        ERROR_CONST,
        ERROR_ENUM,
        ERROR_$REF,
        ERROR_ONE_OF,
        ERROR_UNKNOWN
      ]}
    />
  ))
  .add('No Errors', () => (
    <ErrorSummarySprocket
      title='No Errors'
      errorSummary={[]}
    />
  ))
  .add('Error - Max Items', () => (
    <ErrorSummarySprocket
      title='Error - Max Items'
      errorSummary={[ERROR_MAX_ITEMS]}
    />
  ))
  .add('Error - Min Items', () => (
    <ErrorSummarySprocket
      title='Error - Min Items'
      errorSummary={[ERROR_MIN_ITEMS]}
    />
  ))
  .add('Error - Max Length', () => (
    <ErrorSummarySprocket
      title='Error - Max Length'
      errorSummary={[ERROR_MAX_LENGTH]}
    />
  ))
  .add('Error - Min Length', () => (
    <ErrorSummarySprocket
      title='Error - Min Length'
      errorSummary={[ERROR_MIN_LENGTH]}
    />
  ))
  .add('Error - Max Properties', () => (
    <ErrorSummarySprocket
      title='Error - Max Properties'
      errorSummary={[ERROR_MAX_PROPERTIES]}
    />
  ))
  .add('Error - Min Properties', () => (
    <ErrorSummarySprocket
      title='Error - Min Properties'
      errorSummary={[ERROR_MIN_PROPERTIES]}
    />
  ))
  .add('Error - Additional Items', () => (
    <ErrorSummarySprocket
      title='Error - Additional Items'
      errorSummary={[ERROR_ADDITIONAL_ITEMS]}
    />
  ))
  .add('Error - Maximum', () => (
    <ErrorSummarySprocket
      title='Error - Maximum'
      errorSummary={[ERROR_MAXIMUM]}
    />
  ))
  .add('Error - Minimum', () => (
    <ErrorSummarySprocket
      title='Error - Minimum'
      errorSummary={[ERROR_MINIMUM]}
    />
  ))
  .add('Error - Format', () => (
    <ErrorSummarySprocket
      title='Error - Format'
      errorSummary={[ERROR_FORMAT]}
    />
  ))
  .add('Error - Additional Properties', () => (
    <ErrorSummarySprocket
      title='Error - Additional Properties'
      errorSummary={[ERROR_ADDITIONAL_PROPERTIES]}
    />
  ))
  .add('Error - Dependencies', () => (
    <ErrorSummarySprocket
      title='Error - Dependencies'
      errorSummary={[ERROR_DEPENDENCIES]}
    />
  ))
  .add('Error - Unique Items', () => (
    <ErrorSummarySprocket
      title='Error - Unique Items'
      errorSummary={[ERROR_UNIQUE_ITEMS]}
    />
  ))
  .add('Error - Property Required', () => (
    <ErrorSummarySprocket
      title='Error - Property Required'
      errorSummary={[ERROR_PROPERTY_REQUIRED]}
    />
  ))
  .add('Error - Property Names', () => (
    <ErrorSummarySprocket
      title='Error - Property Names'
      errorSummary={[ERROR_PROPERTY_NAMES]}
    />
  ))
  .add('Error - Pattern Required', () => (
    <ErrorSummarySprocket
      title='Error - Pattern Required'
      errorSummary={[ERROR_PATTERN_REQUIRED]}
    />
  ))
  .add('Error - Type Invalid (expected string)', () => (
    <ErrorSummarySprocket
      title='Error - Type Invalid (expected string)'
      errorSummary={[ERROR_TYPE_INVALID_EXPECTED_TYPE_STRING]}
    />
  ))
  .add('Error - Type Invalid (expected number)', () => (
    <ErrorSummarySprocket
      title='Error - Type Invalid (expected number)'
      errorSummary={[ERROR_TYPE_INVALID_EXPECTED_TYPE_NUMBER]}
    />
  ))
  .add('Error - Type Invalid (expected object)', () => (
    <ErrorSummarySprocket
      title='Error - Type Invalid (expected object)'
      errorSummary={[ERROR_TYPE_INVALID_EXPECTED_TYPE_OBJECT]}
    />
  ))
  .add('Error - Type Invalid (expected array)', () => (
    <ErrorSummarySprocket
      title='Error - Type Invalid (expected array)'
      errorSummary={[ERROR_TYPE_INVALID_EXPECTED_TYPE_ARRAY]}
    />
  ))
  .add('Error - Type Invalid (expected boolean)', () => (
    <ErrorSummarySprocket
      title='Error - Type Invalid (expected boolean)'
      errorSummary={[ERROR_TYPE_INVALID_EXPECTED_TYPE_BOOLEAN]}
    />
  ))
  .add('Error - Type Invalid (expected null)', () => (
    <ErrorSummarySprocket
      title='Error - Type Invalid (expected null)'
      errorSummary={[ERROR_TYPE_INVALID_EXPECTED_TYPE_NULL]}
    />
  ))
  .add('Error - Multiple Of', () => (
    <ErrorSummarySprocket
      title='Error - Multiple Of'
      errorSummary={[ERROR_MULTIPLE_OF]}
    />
  ))
  .add('Error - Pattern', () => (
    <ErrorSummarySprocket
      title='Error - Pattern'
      errorSummary={[ERROR_PATTERN]}
    />
  ))
  .add('Error - Const', () => (
    <ErrorSummarySprocket
      title='Error - Const'
      errorSummary={[ERROR_CONST]}
    />
  ))
  .add('Error - Enum', () => (
    <ErrorSummarySprocket
      title='Error - Enum'
      errorSummary={[ERROR_ENUM]}
    />
  ))
  .add('Error - $Ref', () => (
    <ErrorSummarySprocket
      title='Error - $Ref'
      errorSummary={[ERROR_$REF]}
    />
  ))
  .add('Error - One Of', () => (
    <ErrorSummarySprocket
      title='Error - One Of'
      errorSummary={[ERROR_ONE_OF]}
    />
  ))
  .add('Error - Unknown', () => (
    <ErrorSummarySprocket
      title='Error - Unknown'
      errorSummary={[ERROR_UNKNOWN]}
    />
  ))
