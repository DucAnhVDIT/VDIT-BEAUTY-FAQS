import React, { useState } from "react";
import LoadingIndicator from "../loadingIndicator";

const StaffServices: React.FC = () => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  return (
    <div className="relative">
      {isIframeLoading && (
        <div className="mt-10">
          <LoadingIndicator />
        </div>
      )}
      <iframe
        src="https://scribehow.com/embed/Assign_Staff_Services__L9sAOg6FS3i0ZuiOr84Xig?skipIntro=true&removeLogo=true"
        width="100%"
        height="640"
        allowFullScreen
        onLoad={() => setIsIframeLoading(false)}
      ></iframe>
    </div>
  );
};

export default StaffServices;

