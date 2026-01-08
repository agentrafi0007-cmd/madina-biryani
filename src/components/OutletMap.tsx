"use client";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

// Define the Outlet type
type Outlet = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
};

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "0.75rem",
};

const center = {
  lat: 17.385, // Hyderabad Center
  lng: 78.4867,
};

// IMPORTANT: Replace this with your actual Google Maps API Key
const GOOGLE_MAPS_API_KEY = "AIzaSyBX-gzbZP6_8O6zOoVZQdy9R60OXGgBxOY";

export default function OutletMap({ outlets }: { outlets: Outlet[] }) {
  const [selectedOutlet, setSelectedOutlet] = useState<Outlet | null>(null);

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        options={{
          styles: [
            // Dark/Royal map style
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            {
              elementType: "labels.text.stroke",
              stylers: [{ color: "#242f3e" }],
            },
            {
              elementType: "labels.text.fill",
              stylers: [{ color: "#746855" }],
            },
          ],
        }}
      >
        {outlets.map((outlet) => (
          <Marker
            key={outlet.id}
            position={{ lat: outlet.lat, lng: outlet.lng }}
            onClick={() => setSelectedOutlet(outlet)}
          />
        ))}

        {selectedOutlet && (
          <InfoWindow
            position={{ lat: selectedOutlet.lat, lng: selectedOutlet.lng }}
            onCloseClick={() => setSelectedOutlet(null)}
          >
            <div className="text-stone-900 p-2">
              <h3 className="font-bold text-lg">{selectedOutlet.name}</h3>
              <p className="text-sm">{selectedOutlet.address}</p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${selectedOutlet.lat},${selectedOutlet.lng}`}
                target="_blank"
                className="text-amber-600 font-bold text-sm mt-2 block hover:underline"
              >
                Get Directions
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}
