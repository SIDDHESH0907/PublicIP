import { useState, useEffect } from "react";

function App() {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch geolocation and IP data
    const fetchLocationData = async () => {
      try {
        const response = await fetch("https://ipapi.co/json");
        const data = await response.json();
        setLocationData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching IP and location data:", error);
        setLoading(false);
      }
    };

    fetchLocationData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h1>IP and Geolocation Data</h1>
      {locationData ? (
        <div>
          <p><strong>IP Address:</strong> {locationData.ip}</p>
          <p><strong>City:</strong> {locationData.city}</p>
          <p><strong>Region:</strong> {locationData.region}</p>
          <p><strong>Country:</strong> {locationData.country_name}</p>
          <p><strong>Latitude:</strong> {locationData.latitude}</p>
          <p><strong>Longitude:</strong> {locationData.longitude}</p>
          <p><strong>Timezone:</strong> {locationData.timezone}</p>
          <p><strong>Currency:</strong> {locationData.currency}</p>
          <p><strong>Organization:</strong> {locationData.org}</p>
        </div>
      ) : (
        <p>Unable to fetch location data</p>
      )}
    </div>
  );
}

export default App;
