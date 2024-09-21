import { useState, useEffect } from "react";

function App() {
  const [locationData, setLocationData] = useState({
    country_name: "",
    state: "",
    city: "",
    latitude: "",
    longitude: "",
    IPv4: ""
  });

  useEffect(() => {
    // Define the callback function
    window.callback = function (data) {
      setLocationData({
        country_name: data.country_name,
        state: data.state,
        city: data.city,
        latitude: data.latitude,
        longitude: data.longitude,
        IPv4: data.IPv4
      });
    };

    // Create the script element to load the JSONP script
    const script = document.createElement("script");
    script.src = "https://geolocation-db.com/jsonp?callback=callback";
    document.body.appendChild(script);

    // Clean up the script and callback function when the component unmounts
    return () => {
      document.body.removeChild(script);
      delete window.callback;
    };
  }, []);

  return (
    <div className="App">
      <h1>Geolocation Data</h1>
      <p>Country: {locationData.country_name || "Loading..."}</p>
      <p>State: {locationData.state || "Loading..."}</p>
      <p>City: {locationData.city || "Loading..."}</p>
      <p>Latitude: {locationData.latitude || "Loading..."}</p>
      <p>Longitude: {locationData.longitude || "Loading..."}</p>
      <p>IP Address: {locationData.IPv4 || "Loading..."}</p>
    </div>
  );
}

export default App;
