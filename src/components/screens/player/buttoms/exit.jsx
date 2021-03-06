import React from 'react';
import PropsTypes from 'prop-types';

const Exit = ({clickToExit}) => {
  return (
    <button type="button" className="player__exit" onClick={clickToExit}>Exit</button>
  );
};

Exit.propTypes = {
  clickToExit: PropsTypes.func
};

export default Exit;
