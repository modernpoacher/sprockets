declare namespace SprocketsTypes {
  export type OnChangeType = () => void

  export interface AnswerDefinitionType {
    answer: {
      title: string
      value: string | string[]
    }
    changeAnswer: {
      text: string
      href: string
      visuallyHiddenText?: string
    }
  }

  export interface ErrorDefinitionType {
    text: string
    href: string
  }
}

declare module '@modernpoacher/sprockets' {
  export { default as CheckAnswersSprocket } from '@modernpoacher/sprockets/sprockets/check-answers'
  export { default as ErrorSummarySprocket } from '@modernpoacher/sprockets/sprockets/error-summary'
  export { default as FieldsetSprocket } from '@modernpoacher/sprockets/sprockets/fieldset'
}
