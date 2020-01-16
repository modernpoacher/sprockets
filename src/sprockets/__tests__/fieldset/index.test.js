import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import classnames from 'classnames'

import Legend from 'shinkansen-sprockets/components/legend/fieldset'

import Super from 'shinkansen-sprockets/sprockets'
import Sprocket from 'shinkansen-sprockets/sprockets/fieldset'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-sprockets/sprockets', () => {
  class MockSprocket extends mockComponent {
    getClassName () { }

    renderLegend () { }

    render () {
      return this.renderLegend()
    }
  }

  return {
    __esModule: true,
    default: MockSprocket
  }
})

jest.mock('shinkansen-sprockets/components/legend/fieldset')

describe('shinkansen-sprockets/sprockets/fieldset', () => {
  describe('<Sprocket />', () => {
    describe('With required props', () => {
      const component = (
        <Sprocket />
      )

      it('renders', () => {
        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          expect(Sprocket.prototype.getClassName)
            .toBeDefined()
        })
      })

      describe('`renderLegend`', () => {
        it('is defined', () => {
          expect(Sprocket.prototype.renderLegend)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Sprocket
            legend='MOCK LEGEND'
            onClick={jest.fn()}
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
          <Sprocket />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        returnValue = instance.getClassName()
      })

      it('does not invoke `classnames`', () => {
        expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'fieldset')
      })

      it('returns the classname', () => {
        expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })

    describe('`renderLegend()`', () => {
      const MOCK_ONCLICK = jest.fn()
      const MOCK_ONCHANGE = jest.fn()

      const component = (
        <Sprocket
          legend='MOCK LEGEND'
          onClick={MOCK_ONCLICK}
          onChange={MOCK_ONCHANGE}
        />
      )

      let instance

      beforeEach(() => {
        jest.clearAllMocks()

        const wrapper = mount(component)

        instance = wrapper.instance()

        instance.renderLegend()
      })

      it('renders `<Legend />`', () => {
        expect(Legend)
          .toBeCalledWith({
            legend: 'MOCK LEGEND'
          }, {})
      })
    })
  })
})
