
import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import WelcomeScreen from "./WelcomeScreen";
import "./App.css";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  const updateInfo = (newInfo) => {
    setWeatherData(newInfo);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>

      <WelcomeScreen />

      <SearchBox updateInfo={updateInfo} />

      {weatherData && <InfoBox info={weatherData} />}
    </div>
  );
}