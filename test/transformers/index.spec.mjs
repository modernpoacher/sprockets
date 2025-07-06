import {
  expect
} from 'chai'

import {
  common
} from '#sprockets/transformers'

describe('#sprockets/transformers', () => {
  describe('`common`', () => {
    it('is an object', () => {
      expect(common)
        .to.be.an('object')
    })
  })
})
