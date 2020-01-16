import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import classnames from 'classnames'

import Super from 'shinkansen-sprockets/components/legend'
import Legend from 'shinkansen-sprockets/components/legend/fieldset'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-sprockets/components/legend', () => ({
  __esModule: true,
  default: class MockLegend extends mockComponent {
    getClassName () { }

    render () {
      const { children } = this.props

      return (
        <legend className={this.getClassName()}>
          {children}
        </legend>
      )
    }
  }
}))

describe('shinkansen-sprockets/components/legend/fieldset', () => {
  describe('<Legend />', () => {
    describe('With required props', () => {
      const component = (
        <Legend />
      )

      it('renders', () => {
        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          expect(Legend.prototype.getClassName)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Legend
            legend='MOCK LEGEND'
            onChange={jest.fn()}
          />
        )

        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      let returnValue

      beforeEach(() => {
        jest.spyOn(Super.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Legend />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'fieldset')
      })

      it('returns the classname', () => {
        expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })
  })
})
