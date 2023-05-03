import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Title from '#components/title'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('#components/common/text-content', () => () => 'MOCK TEXT CONTENT')

describe('#components/title', () => {
  describe('<Title />', () => {
    describe('With required props', () => {
      const component = (
        <Title />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`hasTextContent`', () => {
        it('is defined', () => {
          return expect(Title.prototype.hasTextContent)
            .toBeDefined()
        })
      })

      describe('`getTextContent`', () => {
        it('is defined', () => {
          return expect(Title.prototype.getTextContent)
            .toBeDefined()
        })
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Title.prototype.getClassName)
            .toBeDefined()
        })
      })

      describe('`shouldComponentUpdate`', () => {
        it('is defined', () => {
          return expect(Title.prototype.shouldComponentUpdate)
            .toBeDefined()
        })
      })

      describe('`renderTextContent`', () => {
        it('is defined', () => {
          return expect(Title.prototype.renderTextContent)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Title
            title='MOCK TITLE'
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`hasTextContent()`', () => {
      describe('With the `title` prop defined', () => {
        it('returns the `title` prop', () => {
          const component = (
            <Title title='MOCK TITLE' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          return expect(instance.hasTextContent())
            .toBe(true)
        })
      })

      describe('Without the `title` prop defined', () => {
        it('returns false', () => {
          const component = (
            <Title />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          return expect(instance.hasTextContent())
            .toBe(false)
        })
      })
    })

    describe('`getTextContent()`', () => {
      it('returns the `title` prop', () => {
        const component = (
          <Title title='MOCK TITLE' />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        return expect(instance.getTextContent())
          .toBe('MOCK TITLE')
      })
    })

    describe('`getClassName()`', () => {
      it('returns the classname', () => {
        const component = (
          <Title />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        return expect(instance.getClassName())
          .toBe('title')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const component = (
        <Title
          title='MOCK TITLE'
        />
      )

      let instance

      beforeEach(() => {
        instance = (
          shallow(component)
        ).instance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            title: 'MOCK CHANGE TITLE'
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            title: 'MOCK TITLE'
          }))
            .toBe(false)
        })
      })
    })
  })
})
