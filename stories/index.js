import React from 'react'

import { storiesOf } from '@storybook/react'

import {
  FieldsetSprocket
} from 'shinkansen-sprockets'

storiesOf('FieldsetSprocket', module)
  .add('Required and default props', () => (
    <div className='group'>
      <FieldsetSprocket legend='Fieldset One' />
      <FieldsetSprocket legend='Fieldset Two' />
      <FieldsetSprocket legend='Fieldset Three' />
    </div>
  ))
