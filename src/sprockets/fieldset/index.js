/**
 * FieldsetSprocket component
 */
import classnames from 'classnames'

import Sprocket from 'shinkansen-sprockets/sprockets'

export default class FieldsetSprocket extends Sprocket {
  getClassName () {
    return classnames(super.getClassName(), 'fieldset')
  }
}

FieldsetSprocket.propTypes = {
  ...Sprocket.propTypes
}

FieldsetSprocket.defaultProps = {
  ...Sprocket.defaultProps,
  label: 'Fieldset Sprocket'
}
