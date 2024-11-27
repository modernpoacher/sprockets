declare module '#sprockets/sprockets/error-summary' {
  import Sprocket from '#sprockets/sprockets'

  export default class CheckAnswersSprocket extends Sprocket {}
}

declare module '@modernpoacher/sprockets/sprockets/error-summary' {
  export { default } from '#sprockets/sprockets/error-summary'
}
