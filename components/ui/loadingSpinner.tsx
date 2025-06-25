import React from "react";
import { BeatLoader } from "react-spinners";

function LoadingSpinner() {
  return (
    <BeatLoader
      color="oklch(0.488 0.243 264.376)"
      size={25}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default LoadingSpinner;
