console.log("Entering the Map.jsx")
import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
console.log("i am here here  here");
import countries from '../data/countries_big.json';
/*
const countries = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "ADMIN": "Test Country" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]],
      },
    },
  ],
};
*/
console.log(countries);

function Map({ onCountryClick }) {
  const onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    layer.bindPopup(countryName);
    layer.on({
      click: () => onCountryClick(countryName),
    });
  };

  return (
    <MapContainer style={{ height: '400px', width: '600px' }} center={[20, 0]} zoom={2}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoJSON data={countries} onEachFeature={onEachCountry} />
    </MapContainer>
  );
}

console.log("out of Map.jsx")

export default Map;
