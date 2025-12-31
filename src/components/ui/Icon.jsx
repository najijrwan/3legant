import React from 'react';

const Icon = ({ Component, className = '', ...props }) => {
  return <Component className={className} {...props} />;
};

export default Icon;