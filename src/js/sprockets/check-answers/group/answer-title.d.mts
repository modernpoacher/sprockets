declare module '#sprockets/sprockets/check-answers/group/answer-title' {
  import type React from 'react'

  export default function AnswerItem (props: { title: string }): React.JSX.Element
}

declare module '@modernpoacher/sprockets/sprockets/check-answers/group/answer-title' {
  export { default } from '#sprockets/sprockets/check-answers/group/answer-title'
}
