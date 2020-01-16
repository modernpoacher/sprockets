import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import classnames from 'classnames'

import Legend from 'shinkansen-sprockets/components/legend'

import Sprocket from 'shinkansen-sprockets/sprockets'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-sprockets/components/legend')

describe('shinkansen-sprockets/sprockets', () => {
  describe('<Sprocket />', () => {
    describe('With required props', () => {
      const component = (
        <Sprocket legend='MOCK LEGEND' />
      )

      it('renders', () => {
        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
        describe('`getClassName`', () => {
          it('is defined', () => {
            expect(Sprocket.prototype.getClassName)
              .toBeDefined()
          })
        })

        describe('`shouldComponentUpdate`', () => {
          it('is defined', () => {
            expect(Sprocket.prototype.shouldComponentUpdate)
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

      describe('Instance', () => {
        let instance

        beforeEach(() => {
          const wrapper = shallow(component)

          instance = wrapper.instance()
        })

        describe('`getLegend`', () => {
          it('is defined', () => {
            expect(instance.getLegend)
              .toBeDefined()
          })
        })

        describe('`setLegend`', () => {
          it('is defined', () => {
            expect(instance.setLegend)
              .toBeDefined()
          })
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Sprocket
            legend='MOCK LEGEND'
            onChange={jest.fn()}
          />
        )

        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getLegend()`', () => {
      it('returns the `legend` field of the instance', () => {
        const component = (
          <Sprocket legend='MOCK LEGEND' />
        )

        const wrapper = shallow(component)

        const instance = wrapper.instance()

        const mockLegend = {}

        instance.legend = mockLegend

        expect(instance.getLegend())
          .toBe(mockLegend)
      })
    })

    describe('`setLegend()`', () => {
      describe('With a parameter', () => {
        it('sets the parameter to the instance as the field `legend`', () => {
          const component = (
            <Sprocket legend='MOCK LEGEND' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          const mockLegend = {}

          instance.setLegend(mockLegend)

          expect(instance.legend)
            .toBe(mockLegend)
        })
      })

      describe('Without any parameters', () => {
        it('deletes the field `legend` from the instance', () => {
          const component = (
            <Sprocket legend='MOCK LEGEND' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          instance.setLegend()

          expect(instance.legend)
            .toBeUndefined()
        })
      })
    })

    describe('`getClassName()`', () => {
      beforeEach(() => {
        classnames.mockReset()
      })

      describe('With required props', () => {
        let returnValue

        beforeEach(() => {
          const component = (
            <Sprocket legend='MOCK LEGEND' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          returnValue = instance.getClassName()
        })

        it('does not invoke `classnames`', () => {
          expect(classnames)
            .not.toBeCalled()
        })

        it('returns the classname', () => {
          expect(returnValue)
            .toBe('sprocket')
        })
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ONCHANGE = jest.fn()

      const component = (
        <Sprocket
          legend='MOCK LEGEND'
          onChange={MOCK_ONCHANGE}
        />
      )

      let instance

      beforeEach(() => {
        const wrapper = shallow(component)

        instance = wrapper.instance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          expect(instance.shouldComponentUpdate({
            legend: 'MOCK CHANGE LEGEND',
            onChange: jest.fn()
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          expect(instance.shouldComponentUpdate({ // instance.props
            legend: 'MOCK LEGEND',
            onChange: MOCK_ONCHANGE
          }))
            .toBe(false)
        })
      })
    })

    describe('`renderLegend()`', () => {
      const MOCK_ONCHANGE = jest.fn()

      const component = (
        <Sprocket
          legend='MOCK LEGEND'
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
