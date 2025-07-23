import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 

function Places() {
  const [placesList, setPlacesList] = useState([]);

  useEffect(() => {
    const storedPlaces = JSON.parse(localStorage.getItem('placesList')) || [];
    setPlacesList(storedPlaces);
  }, []);

  return (
    <div className="places-page">
      <div className="sidebar">
        <h2>Places List</h2>
        <ul>
          {placesList.length === 0 ? (
            <li>No places yet</li>
          ) : (
            placesList.map((place, index) => (
              <li key={index}>
                <strong>{place.placeName}</strong> – {place.type} – {place.address}
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="map-container">
       
       
      </div>
    </div>
  );
}

export default Places;
