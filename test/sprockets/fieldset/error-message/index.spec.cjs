const {
  expect
} = require('chai')

const ErrorMessage = require('#sprockets/sprockets/fieldset/error-message')

describe('#sprockets/sprockets/fieldset/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
