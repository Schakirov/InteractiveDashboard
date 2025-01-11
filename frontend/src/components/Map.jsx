import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countries from '../data/countries_big_w_names.json';

function Map({ onCountryClick }) {
  // Dynamic styling based on life expectancy
  const mapStyle = (feature) => {
    const lifeExpectancy = feature.properties.LIFE_EXPECTANCY || 0;
    let color = '#C9DAF8'; // Default color

    if (lifeExpectancy > 75) color = '#31a354';
    else if (lifeExpectancy > 50) color = '#addd8e';
    else if (lifeExpectancy > 25) color = '#f03b20';

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
    layer.bindPopup(countryName);

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
