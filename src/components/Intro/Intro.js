import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './Intro.css'

const Intro = () => (
  <Grid.Row centered columns={2}>
    <img src="orca-logo-white.png" alt="Not working today" className="logo" />
  </Grid.Row>
);

Intro.propTypes = {};

export default Intro;
