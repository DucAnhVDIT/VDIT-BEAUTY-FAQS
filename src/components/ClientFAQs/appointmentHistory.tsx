import React, { useState } from "react";
import LoadingIndicator from "../loadingIndicator";

const AppHistory: React.FC = () => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  return (
    <div className="relative">
      {isIframeLoading && (
        <div className="mt-10">
          <LoadingIndicator />
        </div>
      )}
      <iframe
        src="https://scribehow.com/embed/Appointment_History__eZqNl2JUQb-oBM9fOTJ2uA?skipIntro=true&removeLogo=true"
        height="640"
        width="100%"
        allowFullScreen
        onLoad={() => setIsIframeLoading(false)}
      ></iframe>
    </div>
  );
};

export default AppHistory;

