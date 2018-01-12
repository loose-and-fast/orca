import React from 'react';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './BioSection.css';

const BioSection = ({ name, text, url }) => (
  <div className="BioSection">
    <h2>{name}</h2>
    <Image src={url} size="medium" rounded floated="left" />
    <p>{text}</p>
  </div>
);

BioSection.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default BioSection;
