import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ children }) => {
  return <div className="hero">{ children }</div>;
};

Hero.propTypes = {
  children: PropTypes.any,
};

export default Hero;
