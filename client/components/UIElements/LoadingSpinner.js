import React, { useEffect } from 'react';

const LoadingSpinner = props => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const reset = () => {
      return document.body.style.overflow = '';
    };

    return reset;
  }, []);

  return (
    <div className={`${props.asOverlay ? 'loading-spinner__overlay' : ''}`}>
      <div className='lds-dual-ring'></div>
    </div>
  );
};

export default LoadingSpinner;