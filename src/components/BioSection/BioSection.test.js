import React from 'react'

import BioSection from './BioSection'

describe('BioSection', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<BioSection {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})