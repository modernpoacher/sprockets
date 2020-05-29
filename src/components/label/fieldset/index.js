/**
 * FieldsetLabel component
 */
import classnames from 'classnames'
import Label from 'shinkansen-sprockets/components/label'

export default class FieldsetLabel extends Label {
  getClassName () {
    return classnames(super.getClassName(), 'fieldset')
  }
}

FieldsetLabel.propTypes = {
  ...Label.propTypes
}

FieldsetLabel.defaultProps = {
  ...Label.defaultProps
}
