import React from 'react'

import Navigation from './Navigation'

describe('Navigation', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Navigation {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})