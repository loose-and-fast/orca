import React from 'react'
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';

import Navigation from './Navigation'

describe('Navigation', () => {

  it('should match the snapshot', () => {
    const nav = renderer.create(
      <StaticRouter context={{}} >
        <Navigation />
      </StaticRouter>
    ).toJSON();
    expect(nav).toMatchSnapshot()
  })
})