import React from 'react'
import renderer from 'react-test-renderer'

import classnames from 'classnames'

import Super from '@modernpoacher/sprockets/components/group'
import Group from '@modernpoacher/sprockets/sprockets/error-summary/group'
import GroupItem from '@modernpoacher/sprockets/sprockets/error-summary/group/error-item'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

describe('@modernpoacher/sprockets/sprockets/error-summary/group', () => {
  describe('<Group />', () => {
    describe('With required props', () => {
      const component = (
        <Group />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Group.prototype.getClassName)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Group
            onChange={jest.fn()}>
            <GroupItem
              text='MOCK ERROR TEXT'
              href='#mock-error-href'
            />
          </Group>
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      let returnValue

      beforeEach(() => {
        jest.spyOn(Super.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Group />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        return expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'error-summary')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })
  })
})
