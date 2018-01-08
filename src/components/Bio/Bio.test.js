import React from 'react'

import Bio from './Bio'

describe('Bio', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Bio {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})