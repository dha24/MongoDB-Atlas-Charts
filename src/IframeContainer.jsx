import React from 'react';

const IframeContainer = ({ source }) => {
  return (
    <iframe
    style={{
      background: '#FFFFFF',
      border: 'none',
      borderRadius: '2px',
      boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
      width: '640px',
      height: '480px'
    }}
    src="https://charts.mongodb.com/charts-ee-ydwyu/embed/charts?id=660265c8-b804-45fa-8e5b-14c0f6b74bc7&maxDataAge=3600&theme=light&autoRefresh=true"
  />
  
  );
};

export default IframeContainer;
