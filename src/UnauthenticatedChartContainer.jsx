import React, { useEffect, useRef } from 'react';
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

const UnauthenticatedChartContainer = () => {
  const embedContainerRef = useRef(null);
  let chart = null;

  useEffect(() => {
    const embedContainer = embedContainerRef.current;

    chart = new ChartsEmbedSDK({}).createChart({
      baseUrl: 'https://charts.mongodb.com/charts-ee-ydwyu',
      chartId: '660265c8-b804-45fa-8e5b-14c0f6b74bc7',
      height: 300,
      width: 400,
      renderingSpec: {
        version: 1,
        title: 'Customized chart title',
        description: 'Customized chart description',
        axes: {
          y: {
            logScale: true
          },
        },
        channels: {
          x: {
            labelOverride: "New field label"
          },
          y: {
            numberSuffix: "%"
          }
        },
        options: {
          labelSize: 150,
          lineSmoothing: 'monotone'
        }
      }
    });

    chart.render(embedContainer).catch(() => window.alert('Chart failed to render'));

    // Cleanup function
    return () => {
      // Check if chart is initialized before attempting to destroy it
      if (chart) {
        // chart.destroy();
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return <div ref={embedContainerRef}></div>;
};

export default UnauthenticatedChartContainer;
