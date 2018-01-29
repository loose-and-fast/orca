import React from 'react'

import Contact from './Contact'

describe('Contact', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Contact {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})