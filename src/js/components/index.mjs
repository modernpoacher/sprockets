import debug from 'debug'

const log = debug('@modernpoacher/sprockets/components')

log('`sprockets` is awake')

export { default as Description } from './description/index.cjs'
export { default as ErrorMessage } from './error-message/index.cjs'
export { default as Group } from './group/index.cjs'
export { default as Title } from './title/index.cjs'
