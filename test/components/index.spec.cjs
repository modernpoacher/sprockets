const {
  expect
} = require('chai')

const {
  Description,
  ErrorMessage,
  Group,
  Title
} = require('#sprockets/components')

describe('#sprockets/components', () => {
  describe('`Description`', () => {
    it('is a function', () => {
      expect(Description)
        .to.be.a('function')
    })
  })

  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })

  describe('`Group`', () => {
    it('is a function', () => {
      expect(Group)
        .to.be.a('function')
    })
  })

  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
