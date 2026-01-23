import React from "react"

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      backgroundColor: "#282c34",
      color: "white"
    }}>
      <h2>My Portfolio</h2>
      <div>
        <a href="/" style={{ color: "white", marginRight: "15px" }}>Home</a>
        <a href="/projects" style={{ color: "white" }}>Projects</a>
      </div>
    </nav>
  );
}