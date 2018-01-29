import React from 'react'

import Intro from './Intro'

describe('Intro', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Intro {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})