import React from 'react'

import FieldsetSprocket from '#sprockets/sprockets/fieldset'

export default {
  title: 'Stories/Sprockets/Fieldset',
  component: FieldsetSprocket
}

export function Default () {
  return (
    <FieldsetSprocket
      title='Title'
      description='Description'
      errorMessage='Error message'
    />
  )
}

export function NoErrors () {
  return (
    <FieldsetSprocket
      title='Title'
      description='Description'
    />
  )
}
