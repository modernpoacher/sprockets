import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import {
  FieldsetSprocket
} from 'shinkansen-sprockets'

const actionChange = action('change')

storiesOf('FieldsetSprocket', module)
  .add('Required and default props', () => (
    <FieldsetSprocket label='Fieldset'>
      <p>Content</p>
    </FieldsetSprocket>
  ))
  .add('Additional props', () => (
    <FieldsetSprocket label='Fieldset' onChange={actionChange}>
      <p>Content</p>
    </FieldsetSprocket>
  ))
