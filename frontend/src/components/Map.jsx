import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countries from '../data/countries_big_w_names.json';
import lifeExpectancyData from '../data/lifeExpectancy.json';

function Map({ onCountryClick }) {
  const [lifeExpectancy, setLifeExpectancy] = useState(null); // Start with null to check readiness

  // Load the life expectancy data into state (useEffect for possible async setup)
  useEffect(() => {
    setLifeExpectancy(lifeExpectancyData);
  }, []);

  // Utility function to calculate color based on life expectancy
  const getLifeExpectancyColor = (value) => {
    if (value === undefined) return '#e0e0e0'; // Default color for missing data

    // Map value range to blue shades (min: dark blue, max: light blue)
    const minLifeExpectancy = 50; // Assume minimum life expectancy
    const maxLifeExpectancy = 85; // Assume maximum life expectancy
    const colorScale = (value - minLifeExpectancy) / (maxLifeExpectancy - minLifeExpectancy);

    // Interpolate between dark blue (#08306b) and light blue (#ccece6)
    const darkBlue = [203, 252, 199]; 
    const lightBlue = [255, 152, 152]; // RGB forrgb(204, 236, 208)
    const color = darkBlue.map((dark, i) => {
      const light = lightBlue[i];
      return Math.round(light + (dark - light) * colorScale);
    });

    return `rgb(${color.join(',')})`;
  };

  // Dynamic styling based on life expectancy
  const mapStyle = (feature) => {
    const countryCode = feature.id; 
    const value = lifeExpectancy?.[countryCode];
    const color = getLifeExpectancyColor(value);

    return {
      color: '#000',  // Border color
      weight: 1,      // Border width
      fillColor: color,
      fillOpacity: 0.7,
    };
  };

  // Event handling for hover and click
  const onEachCountry = (feature, layer) => {
    const countryName = feature.properties.name;
    const countryCode = feature.id;
    const value = lifeExpectancy?.[countryCode];
    console.log('Feature ID:', feature.id, 'Country Code:', countryCode, 'Value:', value);
    const displayValue = value !== undefined ? `${value} years` : 'No data';

    layer.bindPopup(`${countryName}: ${displayValue}`);

    layer.on({
      mouseover: (e) => {
        e.target.setStyle({
          weight: 1,
          color: '#3C78D8',
          fillColor: '#6D9EEB',
          fillOpacity: 0.9,
        });
      },
      mouseout: (e) => {
        e.target.setStyle(mapStyle(feature)); // Reset to original style
      },
      click: () => onCountryClick(countryName),
    });
  };

  // Prevent rendering the map until lifeExpectancy is ready
  if (!lifeExpectancy) {
    return <div>Loading map data...</div>;
  }

  return (
    <MapContainer 
      style={{ height: '100%', width: 'calc(60vw)' }} 
      center={[20, 0]} 
      zoom={2} 
      minZoom={2} 
      maxBounds={[[-75, -180], [80, 180]]} // Restrict panning to valid lat/lon bounds
      maxBoundsViscosity={1.0} // Adds resistance to moving beyond the bounds
    >
      {/*<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
      <GeoJSON data={countries} style={mapStyle} onEachFeature={onEachCountry} />
    </MapContainer>
  );
}

export default Map;
