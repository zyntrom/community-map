import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icons in bundlers
import icon2x from "leaflet/dist/images/marker-icon-2x.png";
import icon from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({ iconRetinaUrl: icon2x, iconUrl: icon, shadowUrl: shadow });

// Helper to recenter when coords change
function RecenterMap({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) map.setView(coords, 13);
  }, [coords, map]);
  return null;
}

export default function MapView({ coords }) {
  const fallback = [51.505, -0.09]; // only used before we get coords

  return (
    <div style={{
      width: "min(92vw, 600px)",
      aspectRatio: "1 / 1",          // square
      margin: "0 auto",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 6px 14px rgba(0,0,0,0.15)"
    }}>
      <MapContainer
        center={coords || fallback}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <RecenterMap coords={coords} />
        {coords && (
          <Marker position={coords}>
            <Popup>You are here 📍</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

