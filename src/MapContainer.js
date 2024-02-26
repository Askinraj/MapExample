// MapContainer.js
import React, { useEffect } from 'react';

const MapContainer = () => {
  useEffect(() => {
    const googleScript = document.createElement('script');
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=Use GOOGLE API key here &libraries=places`;
    googleScript.async = true;
    window.document.body.appendChild(googleScript);

    googleScript.addEventListener('load', () => {
      // Google Maps API loaded, you can use it here
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.006 },
        zoom: 14
      });

      // Add any additional map configuration or functionality here
    });

    return () => {
      window.document.body.removeChild(googleScript);
    };
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '400px' }} />
  );
};

export default MapContainer;
