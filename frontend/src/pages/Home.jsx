import { useEffect, useState } from "react";
import MapView from "../components/MapView";

export default function Home() {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => setCoords([pos.coords.latitude, pos.coords.longitude]),
      (err) => setError(err.message || "Location permission denied.")
    );
  }, []);

  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ textAlign: "center", marginBottom: 16 }}>Welcome to MyApp</h1>

      {/* Square, decently big map */}
      <MapView coords={coords} />

      {/* Info box */}
      <div style={{
        margin: "16px auto 0",
        width: "min(90vw, 420px)",
        background: "#f5f5f5",
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
        padding: 16,
        textAlign: "center"
      }}>
        <h3 style={{ marginBottom: 8 }}>Location Info</h3>
        {coords ? (
          <>
            <p><b>Latitude:</b> {coords[0]}</p>
            <p><b>Longitude:</b> {coords[1]}</p>
          </>
        ) : (
          <p>{error || "Getting your location..."}</p>
        )}
      </div>
    </div>
  );
}

