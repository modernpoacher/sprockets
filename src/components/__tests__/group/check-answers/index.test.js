import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import classnames from 'classnames'

import Super from 'shinkansen-sprockets/components/group'
import Group from 'shinkansen-sprockets/components/group/check-answers'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-sprockets/components/group')
jest.mock('shinkansen-sprockets/components/group/check-answers/type-string-answer', () => () => 'MOCK STRING ANSWER')
jest.mock('shinkansen-sprockets/components/group/check-answers/type-number-answer', () => () => 'MOCK NUMBER ANSWER')
jest.mock('shinkansen-sprockets/components/group/check-answers/type-boolean-answer', () => () => 'MOCK BOOLEAN ANSWER')
jest.mock('shinkansen-sprockets/components/group/check-answers/type-null-answer', () => () => 'MOCK NULL ANSWER')

const MOCK_RESOURCE = { alpha: 'MOCK ALPHA', omega: 'MOCK OMEGA' }

describe('shinkansen-sprockets/components/group/check-answers', () => {
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
      it('renders type `string` answers', () => {
        const component = (
          <Group
            onChange={jest.fn()}
            checkAnswers={{ meta: { type: 'string' } }}
            resource={MOCK_RESOURCE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders type `number` answers', () => {
        const component = (
          <Group
            onChange={jest.fn()}
            checkAnswers={{ meta: { type: 'number' } }}
            resource={MOCK_RESOURCE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders type `boolean` answers', () => {
        const component = (
          <Group
            onChange={jest.fn()}
            checkAnswers={{ meta: { type: 'boolean' } }}
            resource={MOCK_RESOURCE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders type `null` answers', () => {
        const component = (
          <Group
            onChange={jest.fn()}
            checkAnswers={{ meta: { type: 'null' } }}
            resource={MOCK_RESOURCE}
          />
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
          shallow(component)
            .instance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        return expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'check-answers')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })
  })
})
