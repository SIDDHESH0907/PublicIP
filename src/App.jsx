import { useState, useEffect } from "react";
import publicIp from 'public-ip';
import "./App.css";

function App() {
  const [ip, setIp] = useState("");

  useEffect(() => {
    // Fetch public IP
    const fetchIP = async () => {
      try {
        const ipAddress = await publicIp.v4();
        setIp(ipAddress);
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    };

    fetchIP();
  }, []);

  return (
    <div className="App">
      <h1>Your Public IP Address</h1>
      <p>{ip ? ip : "Fetching IP..."}</p>
    </div>
  );
}

export default App;
