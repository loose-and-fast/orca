import React from 'react'
import { shallow } from 'enzyme';

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