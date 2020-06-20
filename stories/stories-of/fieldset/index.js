import React from 'react'

import { storiesOf } from '@storybook/react'

import {
  FieldsetSprocket
} from 'shinkansen-sprockets'

const ERROR = {
  type: 'UNKNOWN',
  params: {},
  uri: '#/'
}

storiesOf('Fieldset Sprocket', module)
  .add('Required and default props', () => (
    <FieldsetSprocket title='Fieldset Sprocket' />
  ))
  .add('Description', () => (
    <FieldsetSprocket title='Fieldset Sprocket' description='A Fieldset Sprocket' />
  ))
  .add('Error message', () => (
    <FieldsetSprocket title='Fieldset Sprocket' errorMessage={ERROR} />
  ))
