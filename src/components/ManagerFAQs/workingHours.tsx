import React, { useState } from "react";
import LoadingIndicator from "../loadingIndicator";

const WorkingHours: React.FC = () => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  return (
    <div className="relative">
      {isIframeLoading && (
        <div className="mt-10">
          <LoadingIndicator />
        </div>
      )}
      <iframe
        src="https://scribehow.com/embed/Set_Up_Time_Settings_in_VDIT_Manager__4_9kRmw0TM6PQn8RPx2dNg?skipIntro=true&removeLogo=true"
        width="100%"
        height="640"
        allowFullScreen
        onLoad={() => setIsIframeLoading(false)}
      ></iframe>
    </div>
  );
};

export default WorkingHours;
