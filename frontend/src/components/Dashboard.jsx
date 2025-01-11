import React, { useState } from 'react';
import Map from './Map';
import BarChart from './BarChart';
import CircleChart from './CircleChart';
import RadarChart from './RadarChart';
import BubbleChart from './BubbleChart';
import LineChart from './LineChart';
import PolarAreaChart from './PolarAreaChart';

const mockData = {
  USA: { population: 331, gdp: 21137 },
  Canada: { population: 38, gdp: 1643 },
  Germany: { population: 83, gdp: 3846 },
};

function Dashboard() {
  const [selectedCountry, setSelectedCountry] = useState('USA');

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    width: '100vw',
    height: '100vh',
    boxSizing: 'border-box',
    backgroundColor: '#f5f5f5', // Optional for overall background
    padding: '10px',
  };

  const chartContainerStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  const placeholderStyle = {
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '26.67vh',
    width: 'calc(20vw - 20px)',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ ...containerStyle, gap: '0px', padding: '10px' }}>
      <div style={{ ...chartContainerStyle }}>
        <div style={{ ...placeholderStyle, height: '10vh', width: 'calc(100vw - 20px)' }}>
        </div>
        
        <div style={{ ...containerStyle, padding: '0px', width: 'calc(100vw - 20px)' }}>

          {/* Left Column */}
          <div style={chartContainerStyle}>
            <div style={placeholderStyle}>
              <RadarChart data={mockData[selectedCountry] || { population: 0, gdp: 0 }} />
            </div>
            <div style={placeholderStyle}>
              <BubbleChart data={mockData[selectedCountry] || { population: 0, gdp: 0 }} />
            </div>
            <div style={placeholderStyle}>
              <LineChart data={mockData[selectedCountry] || { population: 0, gdp: 0 }} />
            </div>
          </div>

          {/* Map Column */}
          <div style={{ flex: 2 }}>
            <div style={{ ...placeholderStyle, height: 'calc(80vh + 20px)', width: '60vw' }}>
              <Map onCountryClick={handleCountryClick} />
            </div>
          </div>

          {/* Right Column */}
          <div style={chartContainerStyle}>
            <div style={placeholderStyle}>
              <BarChart data={mockData[selectedCountry] || { population: 0, gdp: 0 }} />
            </div>
            <div style={placeholderStyle}>
              <CircleChart data={mockData[selectedCountry] || { population: 0, gdp: 0 }} />
            </div>
            <div style={placeholderStyle}>
              <PolarAreaChart data={mockData[selectedCountry] || { population: 0, gdp: 0 }} />
            </div>
          </div>
        </div>

        <div style={{ ...placeholderStyle, height: '10vh', width: 'calc(100vw - 20px)' }}>
        </div>
      </div>      
    </div>
  );
}

export default Dashboard;
