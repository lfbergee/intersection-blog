import React, { useRef, useState } from "react";
import { useIntersectionObserver } from "@fremtind/jkl-react-hooks";

export const IntersectionComponent = ({ children }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);
  const onIntersect = (entries) =>
    setIsIntersecting(entries.some((entry) => entry.isIntersecting));
  const fallback = () =>
    console.log("useful for browser that do not support intersection observer");
  const options = {
    rootMargin: "-30% 0px -30% 0px",
    threshold: [0, 1.0]
  };
  useIntersectionObserver(targetRef, onIntersect, fallback, options);

  return (
    <div
      className={`target ${isIntersecting ? "target--small" : "target--large"}`}
      ref={targetRef}
    >
      {children}
    </div>
  );
};
