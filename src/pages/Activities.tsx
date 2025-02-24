import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Custom icon for the ambulance
const ambulanceIcon = new L.Icon({
  iconUrl: 'https://example.com/ambulance-icon.png', // Replace with your ambulance icon URL
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Activities: React.FC = () => {
  // Sample data for ambulance tracking
  const ambulances = [
    { id: 1, position: [12.9716, 77.5946], arrival: '10:00 AM', departure: '10:15 AM', delay: '5 mins' }, // Bengaluru coordinates
    { id: 2, position: [12.9352, 77.6241], arrival: '10:05 AM', departure: '10:20 AM', delay: '2 mins' }, // Another location in Bengaluru
  ];

  // Define bounds for Bengaluru
  const bounds = [
    [12.911, 77.557], // Southwest corner
    [13.035, 77.693]  // Northeast corner
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#e9ecef', padding: '20px' }}>
      <div style={{ width: '90%', height: '90%', border: '2px solid #007bff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', backgroundColor: '#fff' }}>
        <MapContainer bounds={bounds} zoom={13} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {ambulances.map((ambulance) => (
            <Marker key={ambulance.id} position={ambulance.position} icon={ambulanceIcon}>
              <Popup>
                <div>
                  <h2>Ambulance {ambulance.id}</h2>
                  <p>Arrival: {ambulance.arrival}</p>
                  <p>Departure: {ambulance.departure}</p>
                  <p>Delay: {ambulance.delay}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Activities;
