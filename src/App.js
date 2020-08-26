import React from "react";
import "./style.css";
import "@fremtind/jkl-core/core.min.css";
import { MobileLink } from "./MobileLink";

export default function App() {
  return (
    <div className="App">
      <div className="spacer--small" />
      <MobileLink>First header</MobileLink>
      <div className="spacer--small" />
      <MobileLink>Middle header</MobileLink>
      <div className="spacer--small" />
      <MobileLink>Last header</MobileLink>
      <div className="spacer--small" />
      <div className="spacer--small" />
      <div className="spacer--small" />
    </div>
  );
}
