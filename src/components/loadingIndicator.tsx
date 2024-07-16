import React from 'react';
import { OrbitProgress } from 'react-loading-indicators';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <OrbitProgress variant="track-disc" color="black" size="medium" text="" textColor="black" />
    </div>
  );
};

export default LoadingIndicator;
