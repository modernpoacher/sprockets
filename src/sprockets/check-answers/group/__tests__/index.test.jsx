import React from 'react'
import renderer from 'react-test-renderer'

import classnames from 'classnames'

import Super from '#sprockets/components/group'
import Group from '#sprockets/sprockets/check-answers/group'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('#sprockets/sprockets/check-answers/group/answer-title', () => () => 'MOCK ANSWER TITLE')
jest.mock('#sprockets/sprockets/check-answers/group/answer-value', () => () => 'MOCK ANSWER VALUE')
jest.mock('#sprockets/sprockets/check-answers/group/change-answer', () => () => 'MOCK CHANGE ANSWER')

describe('#sprockets/sprockets/check-answers/group', () => {
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
            onChange={jest.fn()}
            checkAnswers={[
              {
                answer: {
                  title: 'MOCK ANSWER TITLE',
                  value: 'MOCK ANSWER VALUE'
                },
                changeAnswer: {
                  text: 'MOCK CHANGE ANSWER TEXT',
                  href: '#mock-change-answer-href',
                  visuallyHiddenText: 'MOCK VISUALLY HIDDEN TEXT'
                }
              }
            ]}
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
          renderer.create(component)
            .getInstance()
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
