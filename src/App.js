import React from "react";
import "./style.css";
import "@fremtind/jkl-core/core.min.css";
import { IntersectionComponent } from "./IntersectionComponent";

export default function App() {
  return (
    <div className="App">
      <div className="spacer--small" />
      <IntersectionComponent>First header</IntersectionComponent>
      <div className="spacer--small" />
      <IntersectionComponent>Middle header</IntersectionComponent>
      <div className="spacer--small" />
      <IntersectionComponent>Last header</IntersectionComponent>
      <div className="spacer--small" />
      <div className="spacer--small" />
      <div className="spacer--small" />
    </div>
  );
}
