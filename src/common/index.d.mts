declare module '#sprockets/common' {
  export function DEFAULT_HANDLE_CHANGE (): void

  export function DEFAULT_HANDLE_CLICK (): void
}

declare module '@modernpoacher/sprockets/common' {
  export * from '#sprockets/common'
}
