import { NewtonsCradle } from "ldrs/react";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center-items-center h-screen">
      <NewtonsCradle size="80" speed="1.4" color="#009689" />
    </div>
  );
};

export default loading;
