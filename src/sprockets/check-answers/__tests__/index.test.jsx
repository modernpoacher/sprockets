import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'

import classnames from 'classnames'

import Super from '@modernpoacher/sprockets/sprockets'
import Sprocket from '@modernpoacher/sprockets/sprockets/check-answers'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('@modernpoacher/sprockets/sprockets/check-answers/title')
jest.mock('@modernpoacher/sprockets/sprockets/check-answers/group', () => {
  class MockCog extends mockComponent {
    render () {
      return 'MOCK CHECK ANSWERS GROUP'
    }
  }

  return {
    __esModule: true,
    CheckCog: class CheckCog extends MockCog { },
    default: MockCog
  }
})

const MOCK_CHECK_ANSWERS = [
  {
    answer: { title: 'MOCK ANSWER TITLE', value: 'MOCK ANSWER VALUE' },
    changeAnswer: { href: '#mock-answer-change-href', text: 'MOCK ANSWER CHANGE TEXT', visuallyHiddenText: 'MOCK ANSWER VISUALLY HIDDEN TEXT' }
  },
  {
    answer: { title: 'MOCK ANSWER TITLE', value: 'MOCK ANSWER VALUE' },
    changeAnswer: { href: '#mock-answer-change-href', text: 'MOCK ANSWER CHANGE TEXT', visuallyHiddenText: 'MOCK ANSWER VISUALLY HIDDEN TEXT' }
  },
  {
    answer: { title: 'MOCK ANSWER TITLE', value: 'MOCK ANSWER VALUE' },
    changeAnswer: { href: '#mock-answer-change-href', text: 'MOCK ANSWER CHANGE TEXT', visuallyHiddenText: 'MOCK ANSWER VISUALLY HIDDEN TEXT' }
  },
  {
    answer: { title: 'MOCK ANSWER TITLE', value: 'MOCK ANSWER VALUE' },
    changeAnswer: { href: '#mock-answer-change-href', text: 'MOCK ANSWER CHANGE TEXT', visuallyHiddenText: 'MOCK ANSWER VISUALLY HIDDEN TEXT' }
  },
  {
    answer: { title: 'MOCK ANSWER TITLE', value: 'MOCK ANSWER VALUE' },
    changeAnswer: { href: '#mock-answer-change-href', text: 'MOCK ANSWER CHANGE TEXT', visuallyHiddenText: 'MOCK ANSWER VISUALLY HIDDEN TEXT' }
  },
  {
    answer: { title: 'MOCK ANSWER TITLE', value: 'MOCK ANSWER VALUE' },
    changeAnswer: { href: '#mock-answer-change-href', text: 'MOCK ANSWER CHANGE TEXT', visuallyHiddenText: 'MOCK ANSWER VISUALLY HIDDEN TEXT' }
  }
]

describe('@modernpoacher/sprockets/sprockets/check-answers', () => {
  describe('<Sprocket />', () => {
    describe('With required props', () => {
      const component = (
        <Sprocket />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Sprocket.prototype.getClassName)
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

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Sprocket
            title='MOCK TITLE'
            checkAnswers={MOCK_CHECK_ANSWERS}
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
          <Sprocket />
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
