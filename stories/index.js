import React from 'react'

import { storiesOf } from '@storybook/react'

import {
  FieldsetSprocket
} from 'shinkansen-sprockets'

storiesOf('FieldsetSprocket', module)
  .add('Required and default props', () => (
    <FieldsetSprocket title='Fieldset'>
      <p>Content</p>
    </FieldsetSprocket>
  ))
  .add('Outer - inner', () => (
    <FieldsetSprocket title='Outer'>
      <FieldsetSprocket title='Inner'>
        <p>Content</p>
      </FieldsetSprocket>
    </FieldsetSprocket>
  ))
