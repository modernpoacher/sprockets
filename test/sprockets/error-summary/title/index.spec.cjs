const {
  expect
} = require('chai')

const Title = require('#sprockets/sprockets/error-summary/title')

describe('#sprockets/sprockets/error-summary/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
