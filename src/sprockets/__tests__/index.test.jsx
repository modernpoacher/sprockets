import React from 'react'
import renderer from 'react-test-renderer'

import classnames from 'classnames'

import Title from '@modernpoacher/sprockets/components/title'
import Group from '@modernpoacher/sprockets/components/group'

import Sprocket from '@modernpoacher/sprockets/sprockets'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('@modernpoacher/sprockets/components/title')
jest.mock('@modernpoacher/sprockets/components/group')

describe('@modernpoacher/sprockets/sprockets', () => {
  describe('<Sprocket />', () => {
    describe('With required props', () => {
      const component = (
        <Sprocket title='MOCK TITLE' />
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

        describe('`renderTitle`', () => {
          it('is defined', () => {
            return expect(Sprocket.prototype.renderTitle)
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
          instance = (
            renderer.create(component)
              .getInstance()
          )
        })

        describe('`getTitle`', () => {
          it('is defined', () => {
            return expect(instance.getTitle)
              .toBeDefined()
          })
        })

        describe('`setTitle`', () => {
          it('is defined', () => {
            return expect(instance.setTitle)
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
            title='MOCK TITLE'
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getTitle()`', () => {
      it('returns the `title` field of the instance', () => {
        const component = (
          <Sprocket title='MOCK TITLE' />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        const mockTitle = {}

        instance.title = mockTitle

        return expect(instance.getTitle())
          .toBe(mockTitle)
      })
    })

    describe('`setTitle()`', () => {
      describe('With a parameter', () => {
        it('sets the parameter to the instance as the field `title`', () => {
          const component = (
            <Sprocket title='MOCK TITLE' />
          )

          const instance = (
            renderer.create(component)
              .getInstance()
          )

          const mockTitle = {}

          instance.setTitle(mockTitle)

          return expect(instance.title)
            .toBe(mockTitle)
        })
      })

      describe('Without any parameters', () => {
        it('deletes the field `title` from the instance', () => {
          const component = (
            <Sprocket title='MOCK TITLE' />
          )

          const instance = (
            renderer.create(component)
              .getInstance()
          )

          instance.setTitle()

          return expect(instance.title)
            .toBeUndefined()
        })
      })
    })

    describe('`getGroup()`', () => {
      it('returns the `group` field of the instance', () => {
        const component = (
          <Sprocket group='MOCK TITLE' />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

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
            <Sprocket title='MOCK TITLE' />
          )

          const instance = (
            renderer.create(component)
              .getInstance()
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
            <Sprocket group='MOCK TITLE' />
          )

          const instance = (
            renderer.create(component)
              .getInstance()
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
            <Sprocket title='MOCK TITLE' />
          )

          const instance = (
            renderer.create(component)
              .getInstance()
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
          title='MOCK TITLE'
          onChange={MOCK_ONCHANGE}
        />
      )

      let instance

      beforeEach(() => {
        instance = (
          renderer.create(component)
            .getInstance()
        )
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            title: 'MOCK CHANGE LEGEND',
            onChange: jest.fn()
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            title: 'MOCK TITLE',
            onChange: MOCK_ONCHANGE
          }))
            .toBe(false)
        })
      })
    })

    xdescribe('`renderTitle()`', () => {
      const MOCK_ONCHANGE = jest.fn()

      const component = (
        <Sprocket
          title='MOCK TITLE'
          onChange={MOCK_ONCHANGE}
        />
      )

      let instance

      beforeEach(() => {
        // jest.clearAllMocks()

        instance = (
          renderer.create(component)
            .getInstance()
        )

        instance.renderTitle()
      })

      it('renders `<Title />`', () => {
        return expect(Title)
          .toBeCalledWith({
            title: 'MOCK TITLE'
          }, {})
      })
    })

    describe('`renderGroup()`', () => {
      const MOCK_ONCHANGE = jest.fn()

      const component = (
        <Sprocket
          title='MOCK TITLE'
          onChange={MOCK_ONCHANGE}
        />
      )

      let instance

      beforeEach(() => {
        // jest.clearAllMocks()

        instance = (
          renderer.create(component)
            .getInstance()
        )

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
