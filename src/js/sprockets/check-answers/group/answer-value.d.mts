declare module '#sprockets/sprockets/check-answers/group/answer-value' {
  import type React from 'react'

  export default function AnswerValue (props: { value: string | string[] }): React.JSX.Element
}

declare module '@modernpoacher/sprockets/sprockets/check-answers/group/answer-value' {
  export { default } from '#sprockets/sprockets/check-answers/group/answer-value'
}
