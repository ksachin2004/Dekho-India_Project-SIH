import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const position = [20.5937, 78.9629]; // Coordinates for India, adjust as needed

  return (
    <MapContainer center={position} zoom={5} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.google.com/maps/preview?ie=UTF8#!data=!1m4!1m3!1d2020!2d74.995161!3d13.2164639">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>India</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
