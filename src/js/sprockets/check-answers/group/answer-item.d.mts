declare module '#sprockets/sprockets/check-answers/group/answer-item' {
  import type React from 'react'

  type AnswerDefinitionType = SprocketsTypes.AnswerDefinitionType

  export default function AnswerItem (props: AnswerDefinitionType): React.JSX.Element
}

declare module '@modernpoacher/sprockets/sprockets/check-answers/group/answer-item' {
  export { default } from '#sprockets/sprockets/check-answers/group/answer-item'
}
