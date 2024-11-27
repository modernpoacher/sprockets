declare module '#sprockets/transformers/common' {
  export function getKey (href: string, text: string, index: number): string
}

declare module '@modernpoacher/sprockets/transformers/common' {
  export { default } from '#sprockets/transformers/common'
}
