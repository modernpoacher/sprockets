import React from 'react'

import { storiesOf } from '@storybook/react'

import {
  FieldsetSprocket
} from 'shinkansen-sprockets'

storiesOf('Fieldset Sprocket', module)
  .add('Required and default props', () => (
    <FieldsetSprocket title='Fieldset' />
  ))
