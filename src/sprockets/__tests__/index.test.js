import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import classnames from 'classnames'

import Label from 'shinkansen-sprockets/components/label'
import Group from 'shinkansen-sprockets/components/group'

import Sprocket from 'shinkansen-sprockets/sprockets'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-sprockets/components/label')
jest.mock('shinkansen-sprockets/components/group')

describe('shinkansen-sprockets/sprockets', () => {
  describe('<Sprocket />', () => {
    describe('With required props', () => {
      const component = (
        <Sprocket label='MOCK LABEL' />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
        describe('`getClassName`', () => {
          it('is defined', () => {
            return expect(Sprocket.prototype.getClassName)
              .toBeDefined()
          })
        })

        describe('`shouldComponentUpdate`', () => {
          it('is defined', () => {
            return expect(Sprocket.prototype.shouldComponentUpdate)
              .toBeDefined()
          })
        })

        describe('`renderLabel`', () => {
          it('is defined', () => {
            return expect(Sprocket.prototype.renderLabel)
              .toBeDefined()
          })
        })

        describe('`renderGroup`', () => {
          it('is defined', () => {
            return expect(Sprocket.prototype.renderGroup)
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

        describe('`getLabel`', () => {
          it('is defined', () => {
            return expect(instance.getLabel)
              .toBeDefined()
          })
        })

        describe('`setLabel`', () => {
          it('is defined', () => {
            return expect(instance.setLabel)
              .toBeDefined()
          })
        })

        describe('`getGroup`', () => {
          it('is defined', () => {
            return expect(instance.getGroup)
              .toBeDefined()
          })
        })

        describe('`setGroup`', () => {
          it('is defined', () => {
            return expect(instance.setGroup)
              .toBeDefined()
          })
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Sprocket
            label='MOCK LABEL'
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getLabel()`', () => {
      it('returns the `label` field of the instance', () => {
        const component = (
          <Sprocket label='MOCK LABEL' />
        )

        const wrapper = shallow(component)

        const instance = wrapper.instance()

        const mockLabel = {}

        instance.label = mockLabel

        return expect(instance.getLabel())
          .toBe(mockLabel)
      })
    })

    describe('`setLabel()`', () => {
      describe('With a parameter', () => {
        it('sets the parameter to the instance as the field `label`', () => {
          const component = (
            <Sprocket label='MOCK LABEL' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          const mockLabel = {}

          instance.setLabel(mockLabel)

          return expect(instance.label)
            .toBe(mockLabel)
        })
      })

      describe('Without any parameters', () => {
        it('deletes the field `label` from the instance', () => {
          const component = (
            <Sprocket label='MOCK LABEL' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          instance.setLabel()

          return expect(instance.label)
            .toBeUndefined()
        })
      })
    })

    describe('`getGroup()`', () => {
      it('returns the `group` field of the instance', () => {
        const component = (
          <Sprocket group='MOCK LABEL' />
        )

        const wrapper = shallow(component)

        const instance = wrapper.instance()

        const mockGroup = {}

        instance.group = mockGroup

        return expect(instance.getGroup())
          .toBe(mockGroup)
      })
    })

    describe('`setGroup()`', () => {
      describe('With a parameter', () => {
        it('sets the parameter to the instance as the field `group`', () => {
          const component = (
            <Sprocket label='MOCK LABEL' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          const mockGroup = {}

          instance.setGroup(mockGroup)

          return expect(instance.group)
            .toBe(mockGroup)
        })
      })

      describe('Without any parameters', () => {
        it('deletes the field `group` from the instance', () => {
          const component = (
            <Sprocket group='MOCK LABEL' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          instance.setGroup()

          return expect(instance.group)
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
            <Sprocket label='MOCK LABEL' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          returnValue = instance.getClassName()
        })

        it('does not invoke `classnames`', () => {
          return expect(classnames)
            .not.toBeCalled()
        })

        it('returns the classname', () => {
          return expect(returnValue)
            .toBe('sprocket')
        })
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ONCHANGE = jest.fn()

      const component = (
        <Sprocket
          label='MOCK LABEL'
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
          return expect(instance.shouldComponentUpdate({
            label: 'MOCK CHANGE LEGEND',
            onChange: jest.fn()
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            label: 'MOCK LABEL',
            onChange: MOCK_ONCHANGE
          }))
            .toBe(false)
        })
      })
    })

    xdescribe('`renderLabel()`', () => {
      const MOCK_ONCHANGE = jest.fn()

      const component = (
        <Sprocket
          label='MOCK LABEL'
          onChange={MOCK_ONCHANGE}
        />
      )

      let instance

      beforeEach(() => {
        // jest.clearAllMocks()

        const wrapper = mount(component)

        instance = wrapper.instance()

        instance.renderLabel()
      })

      it('renders `<Label />`', () => {
        return expect(Label)
          .toBeCalledWith({
            label: 'MOCK LABEL'
          }, {})
      })
    })

    describe('`renderGroup()`', () => {
      const MOCK_ONCHANGE = jest.fn()

      const component = (
        <Sprocket
          label='MOCK BACON'
          onChange={MOCK_ONCHANGE}
        />
      )

      let instance

      beforeEach(() => {
        // jest.clearAllMocks()

        const wrapper = mount(component)

        instance = wrapper.instance()

        instance.renderGroup()
      })

      it('renders `<Group />`', () => {
        return expect(Group)
          .toBeCalledWith({
            onChange: MOCK_ONCHANGE,
            children: expect.any(Array)
          }, {})
      })
    })
  })
})
