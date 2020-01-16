/**
 * FieldsetLegend component
 */
import classnames from 'classnames'
import Legend from 'shinkansen-sprockets/components/legend'

export default class FieldsetLegend extends Legend {
  getClassName () {
    return classnames(super.getClassName(), 'fieldset')
  }
}

FieldsetLegend.propTypes = {
  ...Legend.propTypes
}

FieldsetLegend.defaultProps = {
  ...Legend.defaultProps,
  legend: 'Fieldset'
}
