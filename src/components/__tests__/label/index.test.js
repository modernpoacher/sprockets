import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Label from 'shinkansen-sprockets/components/label'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('shinkansen-sprockets/components/common/text-content', () => () => 'MOCK TEXT CONTENT')

describe('shinkansen-sprockets/components/label', () => {
  describe('<Label />', () => {
    describe('With required props', () => {
      const component = (
        <Label />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`textContent`', () => {
        it('is defined', () => {
          return expect(Label.prototype.textContent)
            .toBeDefined()
        })
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Label.prototype.getClassName)
            .toBeDefined()
        })
      })

      describe('`shouldComponentUpdate`', () => {
        it('is defined', () => {
          return expect(Label.prototype.shouldComponentUpdate)
            .toBeDefined()
        })
      })

      describe('`renderTextContent`', () => {
        it('is defined', () => {
          return expect(Label.prototype.renderTextContent)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Label
            label='MOCK LABEL'
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`textContent()`', () => {
      it('returns the `label` prop', () => {
        const component = (
          <Label label='MOCK LABEL' />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        return expect(instance.textContent())
          .toBe('MOCK LABEL')
      })
    })

    describe('`getClassName()`', () => {
      it('returns the classname', () => {
        const component = (
          <Label />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        return expect(instance.getClassName())
          .toBe('label')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const component = (
        <Label
          label='MOCK LABEL'
        />
      )

      let instance

      beforeEach(() => {
        const wrapper = shallow(component)

        instance = wrapper.instance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            label: 'MOCK CHANGE LABEL'
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            label: 'MOCK LABEL'
          }))
            .toBe(false)
        })
      })
    })
  })
})
