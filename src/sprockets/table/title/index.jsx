/**
 * TableTitle component
 */

import React from 'react'
import classnames from 'classnames'
import Title from '@modernpoacher/sprockets/components/title'

export default class TableTitle extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'table')
  }

  render () {
    if (this.hasTextContent()) {
      return (
        <caption className={this.getClassName()}>
          {this.renderTextContent()}
        </caption>
      )
    }

    return null
  }
}

TableTitle.propTypes = {
  ...Title.propTypes
}

TableTitle.defaultProps = {
  ...Title.defaultProps
}
