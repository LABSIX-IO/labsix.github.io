import { expect } from 'chai'

import { fadeRange } from './'

describe('fadeRange', () => {
  it('interpolates a value', () => {
    const sampleRange = fadeRange(10,20)
    expect([
      sampleRange(0),
      sampleRange(5),
      sampleRange(10),
      sampleRange(15),
      sampleRange(20),
      sampleRange(30),
    ]).to.deep.equal([
      0,0,0,.5,1,1
    ])
  });
})
