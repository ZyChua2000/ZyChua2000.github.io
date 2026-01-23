import React from "react";
import MyImage from "../assets/folder.png"; // replace with your image
import "./Home.css"
import Particles from "../components/Particles";
import LiveBrowserInfo from "../components/BrowserInfo";

export default function Home() {
  return (    
    <>
      <Particles />
    <div
      style={{
        display: "flex",
        height: "100vh",
        borderLeft: "1px solid #ccc", // optional visual reference
        borderRight: "1px solid #ccc", // optional visual reference
      }}
    >
      {/* Left half */}
      <div
        style={{
          flex: 0.6,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          borderRight: "4px solid #000", // vertical line
        }}
      >
        <div style={{ textAlign: "center" }}>
            <div style={{ transform: "translateY(-70px)" }}>
                <div className="name">ZHENG</div>
            </div>

            <div style={{ transform: "translateX(100px) translateY(-70px)" }}>
                <div className="name">YANG</div>
            </div>
        </div>
      </div>

      {/* Right half */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <LiveBrowserInfo />
        <img
          src={MyImage}
          alt="Demo"
          style={{ width: "300px", height: "auto", marginBottom: "20px" }}
        />
        <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
          This is some text describing my projects, my work, or whatever you
          want here.
        </p>
      </div>
    </div>
    </>
  );
}
