import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.divIcon({
  className: 'custom-icon',
  html: `
  <svg
  width="34"
  height="34"
  viewBox="0 0 34 34"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    cx="17"
    cy="17"
    r="16.9"
    stroke="black"
    stroke-opacity="0.2"
    stroke-width="0.2"
  />
  <path
    d="M22.7273 16.0714C22.7273 14.537 22.1239 13.0653 21.0498 11.9803C19.9757 10.8953 18.519 10.2857 17 10.2857C15.481 10.2857 14.0243 10.8953 12.9502 11.9803C11.8761 13.0653 11.2727 14.537 11.2727 16.0714C11.2727 18.4449 13.1525 21.5383 17 25.2437C20.8475 21.5383 22.7273 18.4449 22.7273 16.0714ZM17 27C12.3329 22.7147 10 19.071 10 16.0714C10 14.196 10.7375 12.3973 12.0503 11.0712C13.363 9.74502 15.1435 9 17 9C18.8565 9 20.637 9.74502 21.9497 11.0712C23.2625 12.3973 24 14.196 24 16.0714C24 19.071 21.6671 22.7147 17 27Z"
    fill="#f50202"
  />
  <path
    d="M17.0002 17.9999C17.5065 17.9999 17.9921 17.7967 18.3501 17.435C18.7081 17.0734 18.9093 16.5828 18.9093 16.0713C18.9093 15.5599 18.7081 15.0693 18.3501 14.7076C17.9921 14.346 17.5065 14.1428 17.0002 14.1428C16.4939 14.1428 16.0083 14.346 15.6502 14.7076C15.2922 15.0693 15.0911 15.5599 15.0911 16.0713C15.0911 16.5828 15.2922 17.0734 15.6502 17.435C16.0083 17.7967 16.4939 17.9999 17.0002 17.9999ZM17.0002 19.2856C16.1563 19.2856 15.347 18.947 14.7503 18.3442C14.1536 17.7414 13.8184 16.9238 13.8184 16.0713C13.8184 15.2189 14.1536 14.4013 14.7503 13.7985C15.347 13.1957 16.1563 12.8571 17.0002 12.8571C17.844 12.8571 18.6534 13.1957 19.2501 13.7985C19.8468 14.4013 20.182 15.2189 20.182 16.0713C20.182 16.9238 19.8468 17.7414 19.2501 18.3442C18.6534 18.947 17.844 19.2856 17.0002 19.2856Z"
    fill="#f50202"
  />
</svg>
  `,
});

const MyMap = ({ locations }) => {
  return (
    <MapContainer center={[locations[0].lat, locations[0].lng]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, idx) => (
        <Marker
          key={idx}
          position={[location.lat, location.lng]}
          icon={customIcon}
        >
          <Popup>
            {location.name || 'A location'}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MyMap;
