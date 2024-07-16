import React, { useState } from "react";
import LoadingIndicator from "../loadingIndicator";

const ChangeStatus: React.FC = () => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  return (
    <div className="relative">
      {isIframeLoading && (
        <div className="mt-10">
          <LoadingIndicator />
        </div>
      )}
      <iframe
        src="https://scribehow.com/embed/Confirming_and_updating_appointment_status_in_VDIT_scheduling_tool__UdTpW0n3Tv6f9YZLk_ZMPg?skipIntro=true&removeLogo=true"
        width="100%"
        height="640"
        allowFullScreen
        onLoad={() => setIsIframeLoading(false)}
      ></iframe>
    </div>
  );
};

export default ChangeStatus;
