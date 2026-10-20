import "./WelcomeScreen.css"

export default function WelcomeScreen() {
  return (
    <div className="welcome-screen">
      <p className="welcome-tagline">YOUR PERSONAL WEATHER GUIDE</p>

      <h1>
        Weather,
        <br />
        <span>your way.</span>
      </h1>

      <p className="welcome-description">
        Discover what's happening in the sky around you.
      </p>
    </div>
  );
}