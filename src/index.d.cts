declare namespace SprocketsTypes {
  export type OnChangeType = () => void

  export type AnswerDefinitionType = {
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

  export type ErrorDefinitionType = {
    type: string,
    uri: string,
    params: {
      expectedType: string
    }
  }

  export type ComponentsType = {}

  export type FieldChangeType = {
    text: string,
    href: string
  }

  export type FieldErrorType = {
    text: string,
    href: string
  }
}

declare module '@modernpoacher/sprockets/components/common/text-content' {
  import React from 'react'

  export type TextContentProps = {
    textContent: string
  }

  export default function TextContent(props: TextContentProps): React.JSX.Element
}

declare module '@modernpoacher/sprockets/components/description' {
  import React from 'react'

  export type DescriptionProps = {
    description: string
  }

  export default class Description extends React.Component<DescriptionProps> {}
}

declare module '@modernpoacher/sprockets/components/error-message' {
  import React from 'react'

  export type ErrorMessageProps = {
    errorMessage: string
  }

  export default class ErrorMessage extends React.Component<ErrorMessageProps> {}
}

declare module '@modernpoacher/sprockets/components/title' {
  import React from 'react'

  export type TitleProps = {
    title: string
  }

  export default class Title extends React.Component<TitleProps> {}
}

declare module '@modernpoacher/sprockets/components/group' {
  import React from 'react'

  export type GroupProps = {
    onChange: SprocketsTypes.OnChangeType,
    groupRef: object,
    children: React.JSX.Element | React.JSX.Element[]
  }

  export default class Group extends React.Component<GroupProps> {}
}

declare module '@modernpoacher/sprockets/sprockets/check-answers/title' {
  import Title from '@modernpoacher/sprockets/components/title'

  export default class CheckAnswersTitle extends Title {}
}

declare module '@modernpoacher/sprockets/sprockets/check-answers/group' {
  import Group from '@modernpoacher/sprockets/components/group'

  export default class CheckAnswersGroup extends Group {}
}

declare module '@modernpoacher/sprockets/sprockets/check-answers' {
  import Sprocket from '@modernpoacher/sprockets/sprockets'

  export default class ErrorSummarySprocket extends Sprocket {}
}

declare module '@modernpoacher/sprockets/sprockets/error-summary/title' {
  import Title from '@modernpoacher/sprockets/components/title'

  export default class ErrorSummaryTitle extends Title {}
}

declare module '@modernpoacher/sprockets/sprockets/error-summary/group' {
  import Group from '@modernpoacher/sprockets/components/group'

  export default class ErrorSummaryGroup extends Group {}
}

declare module '@modernpoacher/sprockets/sprockets/error-summary' {
  import Sprocket from '@modernpoacher/sprockets/sprockets'

  export default class CheckAnswersSprocket extends Sprocket {}
}

declare module '@modernpoacher/sprockets/sprockets/fieldset/description' {
  import Description from '@modernpoacher/sprockets/components/description'

  export default class FieldsetDescription extends Description {}
}

declare module '@modernpoacher/sprockets/sprockets/fieldset/error-message' {
  import ErrorMessage from '@modernpoacher/sprockets/components/error-message'

  export default class FieldsetErrorMessage extends ErrorMessage {}
}

declare module '@modernpoacher/sprockets/sprockets/fieldset/title' {
  import Title from '@modernpoacher/sprockets/components/title'

  export default class FieldsetTitle extends Title {}
}

declare module '@modernpoacher/sprockets/sprockets/fieldset/group' {
  import Group from '@modernpoacher/sprockets/components/group'

  export default class FieldsetGroup extends Group {}
}

declare module '@modernpoacher/sprockets/sprockets/fieldset' {
  import Sprocket from '@modernpoacher/sprockets/sprockets'

  export default class FieldsetSprocket extends Sprocket {}
}

declare module '@modernpoacher/sprockets/sprockets' {
  import React from 'react'

  export type SprocketProps = {
    title: string,
    onChange: SprocketsTypes.OnChangeType,
    groupRef: object,
    children: React.JSX.Element | React.JSX.Element[]
  }

  export default class Sprocket extends React.Component<SprocketProps> {}
}

declare module '@modernpoacher/sprockets' {
  export { default as CheckAnswersSprocket } from '@modernpoacher/sprockets/sprockets/check-answers'
  export { default as ErrorSummarySprocket } from '@modernpoacher/sprockets/sprockets/error-summary'
  export { default as FieldsetSprocket } from '@modernpoacher/sprockets/sprockets/fieldset'
}
