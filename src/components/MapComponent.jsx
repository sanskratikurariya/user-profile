import React, { useState, useEffect } from 'react';
import MapGL, { Marker } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

export default function MapComponent({ address }) {
  const [viewport, setViewport] = useState({
    latitude: 20.5937,
    longitude: 78.9629,
    zoom: 5,
  });

  const [coordinates, setCoordinates] = useState(null);c
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!address) return;

    setLoading(true);
    setError(null);

    const fetchCoordinates = async () => {
      try {
        const res = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${MAPBOX_TOKEN}`
        );
        const data = await res.json();

        if (data.features?.length > 0) {
          const [lng, lat] = data.features[0].center;
          setCoordinates({ latitude: lat, longitude: lng });
          setViewport({
            latitude: lat,
            longitude: lng,
            zoom: 12,
            transitionDuration: 1000,
          });
        } else {
          setError('Location not found');
        }
      } catch (err) {
        setError('Failed to fetch coordinates');
      } finally {
        setLoading(false);
      }
    };

    fetchCoordinates();
  }, [address]);

  return (
    <div className="relative h-96 rounded-xl border-2 border-cyan-400/30">
      {loading && (
        <div className="absolute inset-0 z-10 bg-black/80 backdrop-blur-sm flex items-center justify-center">
          <div className="text-cyan-400">Loading map...</div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 z-10 bg-red-900/80 backdrop-blur-sm flex items-center justify-center">
          <div className="text-red-400">{error}</div>
        </div>
      )}

      {!loading && !error && (
        <MapGL
          {...viewport}
          style={{ width: '100%', height: '100%' }}
          mapStyle="mapbox://styles/mapbox/dark-v10"
          accessToken={MAPBOX_TOKEN}
          onViewportChange={setViewport}
        >
          {coordinates && (
            <Marker latitude={coordinates.latitude} longitude={coordinates.longitude}>
              <div className="text-3xl animate-bounce">📍</div>
            </Marker>
          )}
        </MapGL>
      )}
    </div>
  );
}