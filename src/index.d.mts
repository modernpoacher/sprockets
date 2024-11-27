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

declare module '#sprockets' {
  export { default as CheckAnswersSprocket } from '#sprockets/sprockets/check-answers'
  export { default as ErrorSummarySprocket } from '#sprockets/sprockets/error-summary'
  export { default as FieldsetSprocket } from '#sprockets/sprockets/fieldset'
}

declare module '@modernpoacher/sprockets' {
  export * from '#sprockets'
}
