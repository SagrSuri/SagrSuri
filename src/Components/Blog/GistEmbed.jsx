// eslint-disable-next-line no-unused-vars
import React from 'react';
import Gist from 'react-gist';

// eslint-disable-next-line react/prop-types
const GistEmbed = ({ gistId }) => {
  return (
    <div className="gist-container">
      <Gist id={gistId} />
    </div>
  );
};

export default GistEmbed;
