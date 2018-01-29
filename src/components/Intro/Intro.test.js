import React from 'react'
import { shallow } from 'enzyme';

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