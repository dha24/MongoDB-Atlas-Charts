import React, { useState, useEffect } from 'react';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const ChartContainer = () => {
  const [chart, setChart] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Add a loading stat


  useEffect(async () => {
    const initializeChart = async () => {
        // Replace these placeholders with your actual login and token retrieval logi
    
        const sdk = new ChartsEmbedSDK({
          baseUrl: "https://charts.mongodb.com/charts-dharmendra-kumar-kyerc",
          getUserToken:  async function() {
              return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
            }
        });
    
        try {
        const chartInstance = await sdk.createChart({ chartId: "edb932c8-0e89-4911-be7b-f9d198a348b7" });
        console.log(chartInstance)
        await setChart(chartInstance)
        }catch (error) {
          console.error('Error fetching chart:', error);
          // Handle errors appropriately (e.g., display an error message)
        } finally {
          setIsLoading(false); // Set loading state to false regardless of success or failure
        }
      }
    await    initializeChart();
    console.log(chart)
  }, []);

  return (
    <div>
    { chart & chart.render()}
    </div>
  );
};

export default ChartContainer;
