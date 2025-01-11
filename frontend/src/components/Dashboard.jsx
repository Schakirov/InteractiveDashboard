import React, { useState } from 'react';
import Map from './Map';
import BarChart from './BarChart';
import CircleChart from './CircleChart';

console.log("Entering Dashboard.jsx")
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

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', width: '650px' }}>
      <div style={{ flex: 2 }}>
        <Map onCountryClick={handleCountryClick} />
      </div>
      <div style={{ flex: 1 }}>
        <BarChart data={mockData[selectedCountry] || { population: 0, gdp: 0 }} />
        <CircleChart data={mockData[selectedCountry] || { population: 0, gdp: 0 }} />
      </div>
    </div>
  );
}

console.log("Leaving Dashboard.jsx")

export default Dashboard;
