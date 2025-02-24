import * as React from 'react';

const Schedule: React.FC = () => {
  // Sample data for ambulances
  const ambulances = [
    { number: 'KA-01-AB-1234', status: 'Available', location: 'MG Road, Bengaluru', destination: 'Bengaluru Hospital', road: 'MG Road' },
    { number: 'KA-02-CD-5678', status: 'On Duty', location: 'Indiranagar, Bengaluru', destination: 'Apollo Hospital', road: 'Indiranagar' },
    { number: 'KA-03-EF-9101', status: 'Available', location: 'Koramangala, Bengaluru', destination: "St. John's Hospital", road: 'Koramangala' },
    { number: 'KA-04-GH-1121', status: 'In Service', location: 'Jayanagar, Bengaluru', destination: 'Fortis Hospital', road: 'Jayanagar' },
    { number: 'KA-05-IJ-3141', status: 'Available', location: 'Whitefield, Bengaluru', destination: 'Manipal Hospital', road: 'Whitefield' },
    { number: 'KA-06-KL-1516', status: 'Available', location: 'BTM Layout, Bengaluru', destination: 'Sakra Premium Hospital', road: 'BTM Layout' },
    { number: 'KA-07-MN-1718', status: 'On Duty', location: 'Electronic City, Bengaluru', destination: 'Narayana Health', road: 'Electronic City' },
    { number: 'KA-08-OP-1920', status: 'In Service', location: 'Bannerghatta Road, Bengaluru', destination: 'Bangalore Baptist Hospital', road: 'Bannerghatta Road' },
    { number: 'KA-09-QR-2122', status: 'Available', location: 'Kalyan Nagar, Bengaluru', destination: 'Cloudnine Hospital', road: 'Kalyan Nagar' },
    { number: 'KA-10-ST-2324', status: 'On Duty', location: 'Malleshwaram, Bengaluru', destination: 'Sankara Nethralaya', road: 'Malleshwaram' },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
      <h1>Ambulance Schedule</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>Ambulance Number</th>
            <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>Status</th>
            <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>Location</th>
            <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>Destination</th>
            <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>Road</th>
          </tr>
        </thead>
        <tbody>
          {ambulances.map((ambulance, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #dee2e6', padding: '8px' }}>{ambulance.number}</td>
              <td style={{ border: '1px solid #dee2e6', padding: '8px' }}>{ambulance.status}</td>
              <td style={{ border: '1px solid #dee2e6', padding: '8px' }}>{ambulance.location}</td>
              <td style={{ border: '1px solid #dee2e6', padding: '8px' }}>{ambulance.destination}</td>
              <td style={{ border: '1px solid #dee2e6', padding: '8px' }}>{ambulance.road}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
