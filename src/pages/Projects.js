import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Projects</h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "20px"
      }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}
