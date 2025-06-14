import React from "react";
import { NewtonsCradle } from "ldrs/react";
import "ldrs/react/NewtonsCradle.css";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-80">
      <NewtonsCradle size="80" speed="1.4" color="#009689" />
    </div>
  );
};

export default Loader;
