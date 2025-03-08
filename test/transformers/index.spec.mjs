import {
  expect
} from 'chai'

import {
  common
} from '#sprockets/transformers'

describe('#sprockets/transformers', () => {
  describe('`common`', () => {
    it('is a function', () => {
      expect(common)
        .to.be.a('module')
    })
  })
})
