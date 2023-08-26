import React from 'react'

import FieldsetSprocket from '@modernpoacher/sprockets/sprockets/fieldset'

export default {
  title: 'Stories/Sprockets/Fieldset',
  component: FieldsetSprocket
}

export const Default = () => (
  <FieldsetSprocket
    title='Title'
    description='Description'
    errorMessage='Error message'
  />
)

export const NoErrors = (args) => (
  <FieldsetSprocket
    title='Title'
    description='Description'
  />
)
