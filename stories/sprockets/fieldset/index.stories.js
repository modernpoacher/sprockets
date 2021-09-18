import React from 'react'

import errors from 'stories/errors'
import FieldsetSprocket from 'shinkansen-sprockets/sprockets/fieldset'

export default {
  title: 'Components/Fieldset',
  component: FieldsetSprocket,
  argTypes: {
    errorMessage: {
      options: Object.keys(errors),
      mapping: errors,
      control: {
        type: 'select',
        labels: {
          string: 'String',
          number: 'Number',
          boolean: 'Boolean',
          array: 'Array',
          object: 'Object',
          null: 'Null'
        }
      }
    },
    children: {
      control: {
        type: null
      }
    }
  }
}

export const Fieldset = (args) => (
  <FieldsetSprocket {...args} />
)

Fieldset.args = {
  title: 'Title',
  description: 'Description'
}
