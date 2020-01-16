import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Legend from 'shinkansen-sprockets/components/legend'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('shinkansen-sprockets/components/common/text-content', () => () => 'MOCK TEXT CONTENT')

describe('shinkansen-sprockets/components/legend', () => {
  describe('<Legend />', () => {
    describe('With required props', () => {
      const component = (
        <Legend />
      )

      it('renders', () => {
        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`textContent`', () => {
        it('is defined', () => {
          expect(Legend.prototype.textContent)
            .toBeDefined()
        })
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          expect(Legend.prototype.getClassName)
            .toBeDefined()
        })
      })

      describe('`shouldComponentUpdate`', () => {
        it('is defined', () => {
          expect(Legend.prototype.shouldComponentUpdate)
            .toBeDefined()
        })
      })

      describe('`renderTextContent`', () => {
        it('is defined', () => {
          expect(Legend.prototype.renderTextContent)
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

    describe('`textContent()`', () => {
      it('returns the `legend` prop', () => {
        const component = (
          <Legend legend='MOCK LEGEND' />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        expect(instance.textContent())
          .toBe('MOCK LEGEND')
      })
    })

    describe('`getClassName()`', () => {
      it('returns the classname', () => {
        const component = (
          <Legend />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        expect(instance.getClassName())
          .toBe('legend')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const component = (
        <Legend
          legend='MOCK LEGEND'
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
            legend: 'MOCK CHANGE LEGEND'
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          expect(instance.shouldComponentUpdate({ // instance.props
            legend: 'MOCK LEGEND'
          }))
            .toBe(false)
        })
      })
    })
  })
})
