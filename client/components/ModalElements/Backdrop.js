import React from 'react';

const Backdrop = props => {
  return (
    <div className='backdrop' onClick={props.onClick} style={props.style && props.style}>{props.children}</div>
  );
};

export default Backdrop;