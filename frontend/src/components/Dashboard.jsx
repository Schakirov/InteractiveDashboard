import React, { useState } from 'react';
import Map from './Map';
import BarChart from './BarChart';
import RadarChart from './RadarChart';

const mockData = {
  USA: { population: 331, gdp: 21137 },
  Canada: { population: 38, gdp: 1643 },
  Germany: { population: 83, gdp: 3846 },
};

function Dashboard() {
  const [selectedCountry, setSelectedCountry] = useState('USA');
  const [selectedDataset, setSelectedDataset] = useState('lifeExpectancy');
  const [selectedMapType, setSelectedMapType] = useState('world');

  const [sliderValues, setSliderValues] = useState({
    lifeExpectancy: 50,
    humanDevelopmentIndex: 50,
    electoralDifficulty: 50,
    biotechPresence: 50,
    localConservatism: 50,
    educationQuality: 50,
    healthcareAccessibility: 50,
    economicFreedom: 50,
    environmentalSustainability: 50,
    innovationIndex: 50,
  });

  const [additionalMetrics, setAdditionalMetrics] = useState([
    { key: 'tourismAttractiveness', label: 'Tourism Attractiveness' },
    { key: 'culturalDiversity', label: 'Cultural Diversity' },
    { key: 'renewableEnergy', label: 'Renewable Energy Usage' },
    { key: 'techInfrastructure', label: 'Tech Infrastructure' },
    { key: 'publicSafety', label: 'Public Safety' },
  ]);

  const handleSliderChange = (metric, value) => {
    setSliderValues({ ...sliderValues, [metric]: value });
  };

  const handleRemoveMetric = (metric) => {
    const updatedSliders = { ...sliderValues };
    delete updatedSliders[metric];
    setSliderValues(updatedSliders);

    const metricLabel = metricLabels[metric] || metric;
    setAdditionalMetrics([...additionalMetrics, { key: metric, label: metricLabel }]);
  };

  const addNewMetric = (metricKey, metricLabel) => {
    if (!sliderValues[metricKey]) {
      setSliderValues({ ...sliderValues, [metricLabel]: 50 });
      setAdditionalMetrics(additionalMetrics.filter((metric) => metric.key !== metricKey));
    }
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const switchDataset = (dataset) => {
    setSelectedDataset(dataset);
    console.log(`Switched to dataset: ${dataset}`);
  };

  const switchMapType = (type) => {
    setSelectedMapType(type);
    console.log(`Switched to Map Type: ${type}`);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    width: '100vw',
    height: '100vh',
    boxSizing: 'border-box',
    backgroundColor: '#f5f5f5',
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
    height: '25vh',
    width: 'calc(20vw - 20px)',
    boxSizing: 'border-box',
  };

  const sliderContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '5px',
    padding: '5px',
    borderRadius: '8px',
    background: 'linear-gradient(90deg, #CCCCCC, #CCCCCC)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    maxWidth: '95%',
    height: '4vh',
  };

  const sliderStyle = {
    flex: 1,
    marginLeft: '10px',
    marginRight: '10px',
    appearance: 'none',
    height: '6px',
    width: '3vw',
    background: '#EEEEEE',
    outline: 'none',
    transition: 'background 0.3s',
  };

  const removeButtonStyle = {
    background: '#b0b0b0',
    border: 'none',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
  };

  const metricLabels = {
    lifeExpectancy: 'Life Expectancy',
    humanDevelopmentIndex: 'Human Development Index',
    electoralDifficulty: 'Electoral Difficulty',
    biotechPresence: 'Biotech Presence',
    localConservatism: 'Local Conservatism',
    educationQuality: 'Education Quality',
    healthcareAccessibility: 'Healthcare Accessibility',
    economicFreedom: 'Economic Freedom',
    environmentalSustainability: 'Environmental Sustainability',
    innovationIndex: 'Innovation Index',
  };

  return (
    <div style={{ ...containerStyle, gap: '0px', padding: '10px' }}>
      <div style={{ ...chartContainerStyle }}>
        <div style={{ ...placeholderStyle, height: '12.5vh', width: 'calc(100vw - 20px)', justifyContent: 'flex-start', textAlign: 'left'  }}>

          {/* Top Section */}
          <div style={{ backgroundColor: '#e0e0e0', padding: '10px', borderRadius: '8px', display: 'flex'}}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px'}}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ margin: '0', fontSize: '1.5em', color: '#333', textAlign: 'left' }}>
                  World Data Dashboard
                </span>
                <span style={{ fontSize: '0.9em', color: '#666', marginLeft: '0px' }}>
                  Analyze various metrics across the globe
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginLeft: 'auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <label htmlFor="datasetDropdown" style={{ fontSize: '0.9em', color: '#666' }}>
                    Select Dataset:
                  </label>
                  <select
                    id="datasetDropdown"
                    value={selectedDataset}
                    onChange={(e) => switchDataset(e.target.value)}
                    style={{ padding: '5px', borderRadius: '4px', fontSize: '0.9em' }}
                  >
                    <option value="integralMetric">Integral Metric</option>
                    <option value="lifeExpectancy">Life Expectancy</option>
                    <option value="hdi">Human Development Index</option>
                    <option value="population">Population</option>
                    <option value="gdp">GDP</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <label htmlFor="mapTypeDropdown" style={{ fontSize: '0.9em', color: '#666' }}>
                    Select Map Type:
                  </label>
                  <select
                    id="mapTypeDropdown"
                    value={selectedMapType}
                    onChange={(e) => switchMapType(e.target.value)}
                    style={{ padding: '5px', borderRadius: '4px', fontSize: '0.9em' }}
                  >
                    <option value="world">World</option>
                    <option value="rhodesIsland">Rhodes Island</option>
                    <option value="usa">USA</option>
                    <option value="switzerland">Switzerland</option>
                    <option value="germany">Germany</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ ...containerStyle, padding: '0px', width: 'calc(100vw - 20px)' }}>

          {/* Left Column */}
          <div style={{ flex: 1, overflowY: 'auto', maxHeight: 'calc(75vh + 20px)', padding: '10px', background: '#e0e0e0', borderRadius: '8px' }}>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="addMetricDropdown" style={{ fontSize: '0.9em', color: '#333', display: 'block', marginBottom: '5px' }}>Add New Metric:</label>
              <select
                id="addMetricDropdown"
                onChange={(e) => {
                  const selectedMetric = additionalMetrics.find(m => m.key === e.target.value);
                  if (selectedMetric) {
                    addNewMetric(selectedMetric.key, selectedMetric.label);
                  }
                }}
                style={{ padding: '5px', borderRadius: '4px', fontSize: '0.9em', width: '100%' }}
              >
                <option value="">Select Metric</option>
                {additionalMetrics.map((metric) => (
                  <option key={metric.key} value={metric.key}>{metric.label}</option>
                ))}
              </select>
            </div>
            {Object.keys(sliderValues).map((metric) => (
              <div key={metric} style={sliderContainerStyle}>
                <label style={{ fontSize: '0.7em', color: '#111111', marginRight: '10px', minWidth: '120px', maxWidth: '5vw', whiteSpace: 'normal', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {metricLabels[metric] || metric}: {sliderValues[metric]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderValues[metric]}
                  onChange={(e) => handleSliderChange(metric, e.target.value)}
                  style={sliderStyle}
                />
                <button
                  onClick={() => handleRemoveMetric(metric)}
                  style={removeButtonStyle}
                >
                  x
                </button>
              </div>
            ))}
          </div>

          {/* Map Column */}
          <div style={{ flex: 2 }}>
            <div style={{ ...placeholderStyle, height: 'calc(75vh + 20px)', width: '60vw' }}>
              <Map onCountryClick={handleCountryClick} />
            </div>
          </div>

          {/* Right Column */}
          <div style={chartContainerStyle}>
            <div style={{ ...placeholderStyle, height: '37.5vh' }}>
              <BarChart data={mockData[selectedCountry] || { population: 0, gdp: 0 }} />
            </div>
            <div style={{ ...placeholderStyle, height: '37.5vh' }}>
              <RadarChart data={mockData[selectedCountry] || { population: 0, gdp: 0 }} />
            </div>
          </div>
        </div>

        <div style={{ ...placeholderStyle, height: '12.5vh', width: 'calc(100vw - 20px)' }}>
        </div>
      </div>      
    </div>
  );
}

export default Dashboard;
