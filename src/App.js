import React from "react";
// import clock
import "@leenguyen/react-flip-clock-countdown";
// import clock css
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
// import video
import videoBg from "../src/assets/video.mp4";
const App = () => {
  return (
    <section className="page">
      {/* overlay */}
      <div className="overlay"></div>
      {/* video */}
      <video src={videoBg} autoPlay loop muted></video>
      {/* content */}
      <div className="page__content">
        <h1>Launching Soon</h1>
        <h3>Leave your email and we'll let you know once the site goes live</h3>
        {/* clock */}
        <FlipClockCountdown
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          className="flip-clock"
          Labels={["days", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
        {/* button */}
        <button className="btn">Notify Me</button>
      </div>
    </section>
  );
};

export default App;
