declare module '#sprockets/sprockets' {
  import React from 'react'

  export interface SprocketProps {
    title: string
    onChange: SprocketsTypes.onEventType
    groupRef: object
    children: React.JSX.Element | React.JSX.Element[]
  }

  export default class Sprocket extends React.Component<SprocketProps> {}
}

declare module '@modernpoacher/sprockets/sprockets' {
  export { default } from '#sprockets/sprockets'
  export * from '#sprockets/sprockets'
}
