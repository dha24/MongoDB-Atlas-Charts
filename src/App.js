import React from 'react';
import ChartContainer from './ChartContainer';
import IframeContainer from './IframeContainer';
import UnauthenticatedChartContainer from './UnauthenticatedChartContainer';

const App = () => {
  return (
    <div className="App">
                 <IframeContainer source="https://example.com" />
                 <UnauthenticatedChartContainer> </UnauthenticatedChartContainer>
    </div>
  );
};

export default App;
