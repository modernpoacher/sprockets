import React from 'react'

import { storiesOf } from '@storybook/react'

import {
  FieldsetSprocket,
  CheckAnswersSprocket,
  ErrorSummarySprocket
} from 'shinkansen-sprockets'

import CHECK_ANSWERS from './check-answers'
import ERROR_SUMMARY, {
  ALL_ERRORS
} from './error-summary'

const RESOURCE = {
  alpha: 'alpha',
  omega: 'omega'
}

storiesOf('FieldsetSprocket', module)
  .add('Required and default props', () => (
    <FieldsetSprocket title='Fieldset'>
      <p>Fields</p>
    </FieldsetSprocket>
  ))

storiesOf('CheckAnswersSprocket', module)
  .add('Required and default props', () => (
    <CheckAnswersSprocket
      title='Check Answers'
      checkAnswers={CHECK_ANSWERS}
      resource={RESOURCE}
    />
  ))

storiesOf('ErrorSummarySprocket', module)
  .add('Required and default props', () => (
    <ErrorSummarySprocket
      title='Error Summary'
      errorSummary={ERROR_SUMMARY}
      resource={RESOURCE}
    />
  )).add('Additional props', () => (
    <ErrorSummarySprocket
      title='Error Summary'
      errorSummary={ALL_ERRORS}
      resource={RESOURCE}
    />
  ))
