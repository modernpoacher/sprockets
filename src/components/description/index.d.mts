declare module '@modernpoacher/sprockets/components/description' {
  import React from 'react'

  export interface DescriptionProps {
    description: string
  }

  export default class Description extends React.Component<DescriptionProps> {}
}
