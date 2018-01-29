import React from 'react'
import { shallow } from 'enzyme';

import BioSection from './BioSection'

describe('BioSection', () => {
  let component, props

  beforeEach(() => {
    props = { url: 'testUrl', name: 'testName', text: 'testText' }
    component = shallow(<BioSection {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})